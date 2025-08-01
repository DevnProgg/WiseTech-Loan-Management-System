import { useState, ChangeEvent, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from 'components/base/IconifyIcon';
import DataTable from './dataTable';
//import { useLender } from 'Store/Lender';
import { useDataChange } from 'Store/DataChange';
//import { RetrieveData } from 'data/algorithms';

const BorrowersTable = () => {
  const [searchText, setSearchText] = useState('');
  //const id = useLender((state) => state.lender.id);

  useEffect(() => {
      //RetrieveData.get_borrowers(id);
  }, [useDataChange((state) => state.loanChange)]);

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
