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
  const [credit, setCredit] = React.useState(false)
  const [cardNumber, setCardNumber] = React.useState(0)
  const [cvv, setCVV] = React.useState(0)
  const [exp, setExp] = React.useState("")
  const [fullname, setFullname] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [number, setNumber] = React.useState(0)
  const [addr, setAddr] = React.useState("")
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
  const cardSection = <>
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Divider>Card Details</Divider>
    </Grid>
    <Grid item xs={12} md={8}>
        <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
        <TextField  color="primary" type='number' variant='outlined' label='Card Number' placeholder='eg. 547843943' size='small' value={cardNumber} onChange={(e) => {setCardNumber(Number(e.target.value))}}/>
    </Grid>
    <Grid item xs={12} md={4}>
        <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
        <TextField  color="primary" type='number' variant='outlined' label='CVV' placeholder='eg. 123' size='small' value={cvv} onChange={(e) => {setCVV(Number(e.target.value))}} />
    </Grid>
    <Grid item xs={12}> 
        <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
        <TextField  color="primary" type='date' variant='outlined' label='Expiry Date' placeholder='eg. 01/22' size='small' value={exp} onChange={(e) => {setExp(e.target.value)}} />
    </Grid>
  </Grid>
  </>

  const dialogPhase2 = <>
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
      <TextField color="primary" type='text'variant='outlined' label='Full Names' placeholder='eg. Thato John Qothi' size='small'  value={fullname} onChange={(e) => {setFullname(e.target.value)}}/>
    </Grid>

    <Grid item xs={12}>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField color="primary" type='email' variant='outlined' label='Email Address' placeholder='eg. thatoqothi@gmail.com' size='small' value={email} onChange={(e) => { setEmail(e.target.value)}}/>
    </Grid>

    <Grid item xs={12}>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField color="primary" type='number' variant='outlined' label='Phone Number' placeholder='eg. 57502734' size='small' value={number} onChange={(e) => {setNumber(Number(e.target.value))}} />
    </Grid>

    <Grid item xs={12}>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField  color="primary" type='text' variant='outlined' label='Physical Address' placeholder='eg. Maseru, Ha-Thetsane, Maseru 100' size='small' value={addr} onChange={(e) => {setAddr(e.target.value)}}/>
    </Grid>

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

    <Grid item xs={12}>
      {credit ? cardSection : 
      <>
      <Typography variant='body2' color="primary" gutterBottom>Is the Borrower subject to automatic billing on due date?</Typography>
      <Button variant='contained' onClick={() => setCredit(true)}> Yes </Button> 
      </> 
      }
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
