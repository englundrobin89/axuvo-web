export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface Navigation {
  main: NavItem[];
  secondary: NavItem[];
}

export const navigation: Navigation = {
  main: [
    {
      label: 'Start',
      href: '/',
    },
    {
      label: 'Build Studio',
      href: '/build-studio',
      description: 'Accelerera din produktutveckling',
    },
    {
      label: 'CTO as a Service',
      href: '/cto-as-a-service',
      description: 'Teknisk ledning på ditt villkor',
    },
    {
      label: 'Specialiststöd',
      href: '/specialiststod',
      description: 'Skickliga utvecklare när du behöver dem',
    },
    {
      label: 'Kontakt',
      href: '/kontakt',
    },
  ],
  secondary: [
    {
      label: 'Insikter',
      href: '/insikter',
      description: 'Artiklar och kunskap om tech',
    },
    {
      label: 'Om Axuvo',
      href: '/om-axuvo',
      description: 'Läs mer om oss',
    },
  ],
};
