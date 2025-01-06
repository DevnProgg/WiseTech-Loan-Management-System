import { topProductsData } from 'data/topLoanData';
import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LoanCard from './LoanCard';

const TopLoans = () => {
  return (
    <Paper sx={{ height: 370 }}>
      <Stack mt={-0.5} alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="text.secondary">
          Top Loans
        </Typography>
      </Stack>

      <Box mt={3}>
        {topProductsData.slice(0, 2).map((item, index) => (
          <React.Fragment key={item.id}>
            <LoanCard data={item} />
            {index !== 1 && <Divider  />}
          </React.Fragment>
        ))}
      </Box>
    </Paper>
  );
};

export default TopLoans;
