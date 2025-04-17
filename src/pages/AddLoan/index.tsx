import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Divider, Grid, TextField, Typography, DialogContentText } from '@mui/material';
import { useOpenCard } from 'Store/Store';
import { useVet } from 'Store/Borrower';


export default function AddLoan() {

  //state
  const open = useOpenCard((state) => (state.openCard))
  const [createLoan, useCreateLoan] = React.useState(false)
  const [loan, setLoan] = React.useState(0)
  const [typeofloan, setTypeOfLoan] = React.useState(false);
  const [monthsToPay, setMonthsToPay] = React.useState(0);
  const [installment, setInstallment] = React.useState(0);
  const [bankStatement, setBankStatement] = React.useState("");

  //functions
  const handleClose  = () => {
    useCreateLoan(false)
    useOpenCard.setState({openCard: false})
  };

  //jsx

  const dialogPhase2 = <>
  <DialogTitle id="Add Loan" style={{marginBottom: '5%', textAlign: "center"}}>
  {"Add New Loan"}
</DialogTitle>
<DialogContent>
  <Grid container px={3.75} spacing={3.75}>
    <Grid item xs={12}>
      <Divider>Loan And Bank Account Information</Divider>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField  color="primary" type='file' variant='outlined' label='Bank Statement' placeholder='eg. 2021-09-30' size='small' defaultValue={bankStatement} onChange={(e) => {setBankStatement(e.target.value)}}/>
    </Grid>

    <Grid item xs={12}>
    <Typography variant='body2' color="primary" gutterBottom>Is this a long term loan? N.B takes more than 1 month to repay.</Typography>
    <Button variant='contained' onClick={() => setTypeOfLoan(true)} > Yes </Button> 

    <Grid item xs={12}>
      {typeofloan ?
      <>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField  color="primary" type='number' variant='outlined' label='Months to Pay' placeholder='eg. 12' size='small' value={monthsToPay} onChange={(e) => {setMonthsToPay(Number(e.target.value))}}/>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField  color="primary" type='number' variant='outlined' label='Monthly Installment' placeholder='eg. 1000' size='small' value={installment} onChange={(e) => {setInstallment(Number(e.target.value))}}/>
      </> :
      <>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField  color="primary" type='number' variant='outlined' label='Loan Amount' placeholder='eg. 100000' size='small' value={loan} onChange={(e) => {setLoan(Number(e.target.value))}}/>
      </>}
    </Grid>
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

  const dialogPhase1 =  <>
<DialogContentText>Is this a new Borrower?</DialogContentText>
<DialogActions>
  <Button variant="text" onClick={()=>{
    useVet.setState({isVet: true})
  }}> No </Button>
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
        dialogPhase2
        :
        dialogPhase1
}
      </Dialog>
    </React.Fragment>
  );
}
