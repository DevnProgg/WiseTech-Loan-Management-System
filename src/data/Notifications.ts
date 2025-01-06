export interface Notification {
  id: number;
  title: string;
  message: string;
  date: string;
  read: boolean;
  serverity: string;
}

export const notifications: Notification[] = [
  {
    id: 1,    
    title: "New message from John Doe",
    message: "Hey, John Doe, how are you doing today?",
    date: "02 Jan 2023",
    read: false,
    serverity: 'info',
  },
  {
    id: 2,
    title: "New message from Jane Smith",
    message: "Hey, Jane Smith, how are you doing today?",
    date: "01 Jan 2023",
    read: false,
    serverity: 'warning',
  },
  {
    id: 3,
    title: "New message from John Doe",
    message: "Hey, John Doe, how are you doing today?",
    date: "02 Mar 2023",
    read: false,
    serverity: 'info',
  },
];