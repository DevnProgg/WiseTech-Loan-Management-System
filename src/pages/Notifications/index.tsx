import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Notifications from 'components/sections/Notifications';
import { notifications as data } from 'data/Notifications';


const NotificationPage = () => {
  return (
    <Grid container px={3.75} spacing={3.75}>
        <Grid item xs={12}>
            <Typography variant="h4" gutterBottom> 
                Notifications
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Notifications notifications={data}/>
        </Grid>
    </Grid>
  );
};

export default NotificationPage;
