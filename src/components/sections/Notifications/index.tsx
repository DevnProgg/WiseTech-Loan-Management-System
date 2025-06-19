import { Alert, AlertTitle } from "@mui/material";
import { RetrieveData } from "data/algorithms";
import { useEffect } from "react";
import { useNotifications } from "Store/Notification";


const Notifications = () => {
  useEffect(() => {
    

    RetrieveData.get_notifications();
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