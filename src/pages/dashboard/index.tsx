import Grid from '@mui/material/Grid';
import Analytics from 'components/sections/dashboard/analytics';
import RecentOrders from 'components/sections/dashboard/activeLoans';
import Reports from 'components/sections/dashboard/reports';
import TopCards from 'components/sections/dashboard/top-cards';
import TopLoans from 'components/sections/dashboard/top-loans';


const Dashboard = () => {
  return (
    <div>
    <Grid container px={3.75} spacing={3.75}>
      <Grid item xs={12}>
        <TopCards />
      </Grid>
      <Grid item xs={12} md={7}>
        <Reports />
      </Grid>
      <Grid item xs={12} md={5}>
        <Analytics />
      </Grid>
      <Grid item xs={12} md={7}>
        <RecentOrders />
      </Grid>
      <Grid item xs={12} md={5}>
        <TopLoans />
      </Grid>
    </Grid>
    </div>
  );
};

export default Dashboard;
