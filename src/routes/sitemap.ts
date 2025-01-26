import paths from 'routes/paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path: string;
  icon?: string;
  avatar?: string;
  items?: SubMenuItem[];
  messages?: number;
}

const sitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader: 'Dashboard',
    path: '/',
    icon: 'solar:widget-bold',
  },
  {
    id: 'analytics',
    subheader: 'Analytics',
    path: paths.analytics,
    icon: 'solar:chart-square-bold',
  },
  {
    id: 'Loans',
    subheader: 'Loans',
    path: paths.loans,
    icon: 'solar:ticket-bold',
  },
  {
    id: 'Borrowers',
    subheader: 'Borrowers',
    path: paths.borrowers,
    icon: 'solar:document-text-bold',
  },
  {
    id: 'notification',
    subheader: 'Notification',
    path: paths.notification,
    icon: 'solar:bell-bold',
  },
  {
    id: 'settings',
    subheader: 'Settings',
    path: paths.settings,
    icon: 'solar:settings-bold',
  }
];

export default sitemap;
