import Grid from '@mui/material/Grid';
import RecentOrders from 'components/sections/dashboard/activeLoans';
import History from 'components/sections/Loans/History';

const Loans = () => {
  return (
    <Grid container px={3.75} spacing={3.75}>
      <Grid item xs={12}>
        <RecentOrders />
      </Grid>
      <Grid item xs={12}>
        <History/>
      </Grid>
    </Grid>
  );
};

export default Loans;
