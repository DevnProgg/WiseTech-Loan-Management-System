import { useEffect } from 'react';
import { Alert } from "@mui/material";
import { useMessages } from "Store";

function Cookie() {
  const cookies = useMessages((state) => state.messages);
  const { deleteMessage, deleteOldMessages } = useMessages();

  useEffect(() => {
    const interval = setInterval(() => {
      deleteOldMessages();
    }, 6000); // 1 minute

    return () => clearInterval(interval);
  }, [deleteOldMessages]);

  return (
    <div style={{ position: "fixed", bottom: 72, right: 16 }}>
      {
        cookies.map((cookie, index) => (
          <Alert key={index} severity={cookie.serverity} onClose={() => { deleteMessage(index) }}>
            {cookie.message}
          </Alert>
        ))
      }
    </div>
  );
}

export default Cookie;