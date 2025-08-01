import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DefaultsChart from './defaultChart'; 


const DefaultPayments = () => {
  return (
    <Paper sx={{ pr: 0, height: 410 }}>
      <Stack mt={-0.5} pr={3.5} alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="text.secondary">
          Default Payments Report
        </Typography>

      </Stack>
      <DefaultsChart
        data={[10, 13, 24, 23, 43, 54, 56, 67, 67,]}
        sx={{ height: '320px !important' }}
      />
    </Paper>
  );
};

export default DefaultPayments;
