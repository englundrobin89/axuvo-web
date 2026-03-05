import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'link';
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const variantStyles = {
  primary: 'bg-mint text-midnight hover:bg-mint-hover',
  secondary: 'border border-mint text-mint hover:bg-mint/10',
  ghost: 'text-silver hover:text-white',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  children,
  className,
  onClick,
  disabled,
}) => {
  const baseStyles = 'rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center';
  const variantClass = variantStyles[variant];
  const sizeClass = sizeStyles[size];
  const combinedClassName = `${baseStyles} ${variantClass} ${sizeClass} ${className || ''}`;

  if (as === 'link' && href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
