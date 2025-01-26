import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AnalyticsChart from './AnalyticsChart';

const AnalyticsData = [
  {
    id: 1,
    value: 60,
    name: 'Paid',
  },
  {
    id: 2,
    value: 45,
    name: 'Pending',
  },
];

const Analytics = () => {
  return (
    <Paper sx={{ px: 0, height: 410 }}>
      <Stack mt={-0.5} px={3.75} alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="text.secondary" zIndex={1000}>
          Analytics
        </Typography>

      </Stack>

      <AnalyticsChart data={AnalyticsData} sx={{ mt: -5.5, mx: 'auto', width: 300, height: '370px !important' }} />
    </Paper>
  );
};

export default Analytics;
