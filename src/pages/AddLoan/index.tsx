import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Checkbox, Divider, Grid, TextField, Typography, DialogContentText } from '@mui/material';
import { useOpenCard } from 'Store';


export default function AddLoan() {
  const open = useOpenCard((state) => (state.openCard))
  const [createLoan, useCreateLoan] = React.useState(false)
  const [credit, setCredit] = React.useState(false)
  const handleClose = () => {
    useCreateLoan(false)
    useOpenCard.setState({openCard: false})
  };

  const subElement = <>
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Divider>Card Details</Divider>
    </Grid>
    <Grid item xs={12} md={8}>
        <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
        <TextField  color="primary" type='number' variant='outlined' label='Card Number' placeholder='eg. 547843943' size='small' />
    </Grid>
    <Grid item xs={12} md={4}>
        <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
        <TextField  color="primary" type='number' variant='outlined' label='CVV' placeholder='eg. 123' size='small' />
    </Grid>
    <Grid item xs={12}> 
        <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
        <TextField  color="primary" type='date' variant='outlined' label='Expiry Date' placeholder='eg. 01/22' size='small' />
    </Grid>
  </Grid>
  </>

  const element = <>
  <DialogTitle id="Add Loan" style={{marginBottom: '5%', textAlign: "center"}}>
  {"Add New Loan"}
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
      <Divider>Next Of Kin Information <Typography variant='body2'>(optional)</Typography></Divider>
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
      {credit ? subElement : 
      <>
      <Typography variant='body2' color="primary" gutterBottom>Is the Borrower subject to automatic billing on due date?</Typography>
      <Checkbox value={credit} onChange={(e) => setCredit(e.target.checked)}/>      
      </>   }
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
    Add Loan
  </Button>
</DialogActions>
</>

  const element2 =  <>
<DialogContentText>Is this a new Borrower?</DialogContentText>
<DialogActions>
  <Button variant="text" onClick={handleClose}> No </Button>
  <Button variant="contained" color="primary"  onClick={() => {useCreateLoan(true)}}> Yes </Button>
</DialogActions>
</>

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Add Loan"
        aria-describedby="Add Loan"
      >
        { createLoan ? 
        element
        :
        element2
}
      </Dialog>
    </React.Fragment>
  );
}
