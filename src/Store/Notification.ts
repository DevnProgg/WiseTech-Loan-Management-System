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
    notifications : [{
        id : 1,
        title : "Update App",
        message : "Please update software as soon as possible for security puposes",
        date : "01 Feb 2025"
    }],
    setNotifications : (notifications) => set({notifications : notifications}),
}))

//end