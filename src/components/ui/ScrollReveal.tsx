'use client';

import React, { useEffect, useRef, useState, createContext, useContext } from 'react';

type RevealVariant = 'fade-up' | 'fade-in' | 'fade-down' | 'slide-left' | 'slide-right' | 'scale' | 'blur';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

const getInitialStyles = (variant: RevealVariant): React.CSSProperties => {
  const base: React.CSSProperties = { opacity: 0, willChange: 'opacity, transform' };

  switch (variant) {
    case 'fade-up':
      return { ...base, transform: 'translateY(40px)' };
    case 'fade-down':
      return { ...base, transform: 'translateY(-30px)' };
    case 'fade-in':
      return { ...base };
    case 'slide-left':
      return { ...base, transform: 'translateX(-50px)' };
    case 'slide-right':
      return { ...base, transform: 'translateX(50px)' };
    case 'scale':
      return { ...base, transform: 'scale(0.92)' };
    case 'blur':
      return { ...base, filter: 'blur(8px)', transform: 'translateY(20px)' };
    default:
      return { ...base, transform: 'translateY(40px)' };
  }
};

const getVisibleStyles = (variant: RevealVariant, duration: number, delay: number): React.CSSProperties => {
  const transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms${variant === 'blur' ? `, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms` : ''}`;

  return {
    opacity: 1,
    transform: 'translateY(0) translateX(0) scale(1)',
    filter: 'blur(0px)',
    transition,
    willChange: 'auto',
  };
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.12,
  once = true,
  className = '',
  as: Tag = 'div',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const style = isVisible
    ? getVisibleStyles(variant, duration, delay)
    : getInitialStyles(variant);

  return React.createElement(
    Tag,
    { ref, className, style },
    children
  );
};

/* ── Stagger Container ──
   Wraps a group of items and auto-applies increasing delays to each child.
   Great for card grids, lists, etc. */

interface StaggerRevealProps {
  children: React.ReactNode;
  staggerDelay?: number;
  variant?: RevealVariant;
  duration?: number;
  threshold?: number;
  className?: string;
}

const StaggerContext = createContext<{
  variant: RevealVariant;
  duration: number;
  staggerDelay: number;
  threshold: number;
}>({
  variant: 'fade-up',
  duration: 700,
  staggerDelay: 100,
  threshold: 0.08,
});

export const StaggerReveal: React.FC<StaggerRevealProps> = ({
  children,
  staggerDelay = 100,
  variant = 'fade-up',
  duration = 600,
  threshold = 0.08,
  className = '',
}) => {
  return (
    <StaggerContext.Provider value={{ variant, duration, staggerDelay, threshold }}>
      <div className={className}>
        {React.Children.map(children, (child, index) => (
          <ScrollReveal
            variant={variant}
            delay={index * staggerDelay}
            duration={duration}
            threshold={threshold}
          >
            {child}
          </ScrollReveal>
        ))}
      </div>
    </StaggerContext.Provider>
  );
};
