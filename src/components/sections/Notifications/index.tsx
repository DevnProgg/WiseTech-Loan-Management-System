import { Alert, AlertTitle } from "@mui/material";
import { Notification } from "data/Notifications";

interface NotificationsProps {
    notifications: Notification[];
}

const Notifications = ({notifications}: NotificationsProps) => {

    return (
        <>
        {
        notifications.map((notification:Notification)=>{
            return(
                <>
                {notification.read ? null :
                <Alert severity={notification.serverity === 'info' ? 'success' : 'warning'} key={notification.id} onClose={() => {notification.read = true;}}>
                    <AlertTitle>{notification.title + ' (' + notification.date + ')' }</AlertTitle>
                    {notification.message}
                </Alert>
        }
                </>
            );
        })
        }
        </>
    );
};

export default Notifications;