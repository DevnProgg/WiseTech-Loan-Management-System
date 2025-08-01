export interface TopCard {
  id: string | number;
  title: string;
  count: string;
}

export const topCardsData: TopCard[] = [
  {
    id: 1,
    title: 'Active Loans',
    count: '100',
  },
  {
    id : 2,
    title: 'Plan',
    count: 'Enterprise Plan'
  },
  {
    id : 3,
    title : 'Late Payments',
    count : '3'
  }

];
