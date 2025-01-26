import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ReportsChart from './ReportsChart'; 


const Reports = () => {
  return (
    <Paper sx={{ pr: 0, height: 410 }}>
      <Stack mt={-0.5} pr={3.5} alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="text.secondary">
          Revenue Growth
        </Typography>

      </Stack>
      <ReportsChart
        data={[0,0,0,0,0,0,0,0,0,0,0,0]}
        sx={{ height: '320px !important' }}
      />
    </Paper>
  );
};

export default Reports;
