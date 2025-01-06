export interface TopCard {
  id: string | number;
  icon: string;
  title: string;
  count: string;
  iconColor: string;
  iconBg: string;
}

export const topCardsData: TopCard[] = [
  {
    id: 1,
    icon: 'solar:ticket-bold',
    title: 'Creates a new loan entry',
    count: 'Add Loan',
    iconColor: 'secondary.main',
    iconBg: 'transparent.secondary.main',
  },

];
