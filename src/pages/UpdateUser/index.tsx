import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider, Grid, TextField, Typography } from '@mui/material';
import { useUpdateUser } from 'Store';


export default function Updateuser() {
  const open = useUpdateUser((state) => (state.isOpen))
  const handleClose = () => {
    useUpdateUser.setState({isOpen: false})
  };


  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Add Loan"
        aria-describedby="Add Loan"
      >
      <DialogTitle id="Add Loan" style={{marginBottom: '5%', textAlign: "center"}}>
  {"Update Borrower Information"}
</DialogTitle>
<DialogContent>
  <Grid container px={3.75} spacing={3.75}>

    <Grid item xs={12}>
      <Divider>Personal Information</Divider>
    </Grid>

    <Grid item xs={12}>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField color="primary" type='text'variant='outlined' label='Full Names' placeholder='eg. Thato John Qothi' size='small' />
    </Grid>

    <Grid item xs={12}>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField color="primary" type='email' variant='outlined' label='Email Address' placeholder='eg. thatoqothi@gmail.com' size='small' />
    </Grid>

    <Grid item xs={12}>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField color="primary" type='number' variant='outlined' label='Phone Number' placeholder='eg. 57502734' size='small' />
    </Grid>

    <Grid item xs={12}>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField  color="primary" type='text' variant='outlined' label='Physical Address' placeholder='eg. Maseru, Ha-Thetsane, Maseru 100' size='small' />
    </Grid>

    <Grid item xs={12}>
      <Divider>Next Of Kin Information </Divider>
    </Grid>

    <Grid item xs={12}>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField  color="primary" type='text' variant='outlined' label='Full Names' placeholder='eg. Maserati Mary Qothi' size='small' />
    </Grid>

    <Grid item xs={12}>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField  color="primary" type='number' variant='outlined' label='Phone Number' placeholder='eg. 67583902' size='small' />
    </Grid>

    <Grid item xs={12}>
      <Divider>Loan And Bank Account Information</Divider>
    </Grid>

    <Grid item xs={12}>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField  color="primary" type='number' variant='outlined' label='Loan Amount' placeholder='eg. 100000' size='small' />
    </Grid>

    <Grid item xs={12}>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField  color="primary" type='date' variant='outlined' label=' Preferred Payment Date' size='small' />
    </Grid>

  </Grid>

</DialogContent>
<DialogActions>
  <Button variant="text" color="secondary" onClick={handleClose}>Cancel</Button>
  <Button variant="contained" onClick={handleClose} autoFocus>
    Save
  </Button>
</DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
