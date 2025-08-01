import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LoanCard from './LoanCard';
import { CircularProgress } from '@mui/material';
import { useLoanData } from 'Store/Loan';

const TopLoans = () => {
  const topProductsData = useLoanData((state) => state.loans)

  return (
    <Paper sx={{ height: 370 }}>
      <Stack mt={-0.5} alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="text.secondary">
          Top Loans
        </Typography>
      </Stack>

      {
        topProductsData.length != 0 ? <Box mt={3}>
        {topProductsData.slice(0, 2).map((item, index) => (
          <React.Fragment key={item.id}>
            <LoanCard data={item} />
            {index !== 1 && <Divider  component={"hr"}/>}
          </React.Fragment>
        ))}
      </Box> : <center>
                  <CircularProgress style={{ marginTop: '20%', marginBottom: '20%'}}/>
                </center>
      }
    </Paper>
  );
};

export default TopLoans;
