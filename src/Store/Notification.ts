import {create} from "zustand"

//state managing notifications
export interface Notification {
    id: number;
    title: string;
    message: string;
    date: string;
}

interface NotificationState {
    notifications : Notification[];
    setNotifications : (notifications : Notification[]) => void;
}

export const useNotifications = create<NotificationState> ((set) => ({
    notifications : [],
    setNotifications : (notifications) => set({notifications : notifications}),
}))

//end