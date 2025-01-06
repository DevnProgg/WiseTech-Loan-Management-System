import Grid from '@mui/material/Grid';
import App from 'components/sections/AnalyticsComps';
import Analytics from 'components/sections/dashboard/analytics';
import Reports from 'components/sections/dashboard/reports';
import TopLoans from 'components/sections/dashboard/top-loans';


const AnalyticsPage = () => {
  return (
    <Grid container px={3.75} spacing={3.75}>
      <Grid item xs={12} md={7}>
        <Reports />
      </Grid>
      <Grid item xs={12} md={5}>
        <Analytics />
      </Grid>
      <Grid item xs={12} md={3}>
        <TopLoans />
      </Grid>
      <Grid item xs={12} md={9}>
        <App/>
      </Grid>
    </Grid>
  );
};

export default AnalyticsPage;
