import { useState, ChangeEvent, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from 'components/base/IconifyIcon';
import DataTable from '../../Loans/History/DataTable';

import { LoanData, useDataChange, useLender, useLoanData, useMessages } from 'Store';
import { supabase } from 'data/database';

const History = () => {
  const id = useLender((state) => state.lender.id);
  const { setloans } = useLoanData();
  const { addMessage } = useMessages();
  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const { data, error } = await supabase.from("getloans").select("id, name, amount, status, type, monthstorepay").eq("lender_id", id).eq("status", "Paid");

        if (error) {
          throw error;
        }

        const loans: LoanData[] = data.map((loan: 
          { id: string; 
            name: string; 
            amount: number; 
            status: string ;
            type : string;
            monthstorepay : number}) => ({
          id: loan.id,
          borrowerName: loan.name,
          owing: loan.amount,
          status: loan.status,
          type: loan.type,
          monthstorepay: loan.monthstorepay,
        }));

        setloans(loans);
        addMessage({ message: "Loan data fetched successfully", serverity: "success" });
      } catch (error) {
        if (error instanceof Error) {
          addMessage({ message: error.message, serverity: "error" });
        } else {
          addMessage({ message: "Failed to get loans", serverity: "error" });
        }
      }
    };

    fetchLoanData();
  }, [useDataChange.getState().loanChange]);

  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Paper sx={{ height: { xs: 418, sm: 370 }, overflow: 'hidden' }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        mt={-0.5}
        spacing={1.5}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6" color="text.secondary">
          History
        </Typography>

        <TextField
          variant="filled"
          size="small"
          placeholder="Search here"
          value={searchText}
          onChange={handleInputChange}
          sx={{ width: 1, maxWidth: { xs: 260, sm: 240 } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconifyIcon icon="prime:search" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Box mt={{ xs: 1.5, sm: 0.75 }} height={305} flex={1}>
        <DataTable searchText={searchText} />
      </Box>
    </Paper>
  );
};

export default History;
