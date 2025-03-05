import { Alert, AlertTitle } from "@mui/material";
import { supabase } from "data/database";
import { useEffect } from "react";
import { useMessages, useNotifications } from "Store";


const Notifications = () => {
    const { setNotifications } = useNotifications();
      const { addMessage } = useMessages();
    
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data, error } = await supabase.from('notifications').select('*');

        if (error) {
          throw error;
        }

        const notifications = data.map((notification: {
          id: number;
          title: string;
          message: string;
          date: string;
        }) => ({
          id: notification.id,
          title: notification.title,
          message: notification.message,
          date: notification.date,
        }));


        setNotifications(notifications);
        addMessage({ message: "Notifications fetched successfully", serverity: "success" });

      } catch (error) {
        if (error instanceof Error) {
          addMessage({ message: error.message, serverity: "error" });
        } else {
          addMessage({ message: "Failed to get Notifications", serverity: "error" });
        }
      }
    };

    fetchNotifications();
  }, []);

      const notifications = useNotifications((state) => state.notifications);
    return (
        <>
        {
        notifications.map((notification)=>{
            return(
                <Alert severity={'warning'} key={notification.id} >
                    <AlertTitle>{notification.title + ' (' + notification.date + ')' }</AlertTitle>
                    {notification.message}
                </Alert>
            );
        })
        }
        </>
    );
};

export default Notifications;