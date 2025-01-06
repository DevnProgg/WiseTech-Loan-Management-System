import Grid from '@mui/material/Grid';
import BorrowersTable from 'components/sections/Borrowers';


const Borrowers = () => {
  return (
    <Grid container px={3.75} spacing={3.75}>
      <Grid item xs={12}>
        <BorrowersTable />
      </Grid>
    </Grid>
  );
};

export default Borrowers;
