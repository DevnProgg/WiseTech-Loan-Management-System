import { useState, ChangeEvent, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from 'components/base/IconifyIcon';
import DataTable from './dataTable';
import { BorrowerData, useBorrowerData, useDataChange, useLender, useMessages } from 'Store';
import { supabase } from 'data/database';

const BorrowersTable = () => {
  const [searchText, setSearchText] = useState('');
  const id = useLender((state) => state.lender.id);
  const { setBorrowers } = useBorrowerData();
  const { addMessage } = useMessages();

  useEffect(() => {
    const fetchBorrowers = async () => {
      try {
        const { data, error } = await supabase.from("getborrowers").select("id, name, phone_number, email_address, status").eq("id", id);

        if (error) {
          throw error;
        }

        const borrowers: BorrowerData[] = data.map((Borrower: {
          id: string;
          name: string;
          phone_number: string;
          email_address: string;
          status: string;
        }) => ({
          id: Borrower.id,
          borrowerName: Borrower.name,
          phonenumber: Borrower.phone_number,
          email: Borrower.email_address,
          Status: Borrower.status
        }));

        setBorrowers(borrowers);
        addMessage({ message: "Borrower data fetched successfully", serverity: "success" });
      } catch (error) {
        if (error instanceof Error) {
          addMessage({ message: error.message, serverity: "error" });
        } else {
          addMessage({ message: "Failed to get borrowers", serverity: "error" });
        }
      }
    };

    fetchBorrowers();
  }, [useDataChange((state) => state.borrowerChange)]);

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
          Borrowers
        </Typography>

        <TextField
          variant="filled"
          size="small"
          placeholder="Search here"
          value={searchText}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconifyIcon icon="eva:search-outline" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <DataTable searchText={searchText} />
    </Paper>
  );
};

export default BorrowersTable;
