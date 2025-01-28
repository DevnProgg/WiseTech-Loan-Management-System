import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import paths from 'routes/paths';
import {Grid, LinearProgress, TextField, Typography } from '@mui/material';
import { useLender, useMessages } from 'Store';
import { supabase } from 'data/database';


export default function Settings() {

  //state
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [username, setUsername] = React.useState(useLender((state) => state.lender.username))
  const [password, setPassword] = React.useState(useLender((state) => state.lender.password))
  const [interest, setInterest] = React.useState(useLender((state) => state.lender.interest_rate.toString))
  const [number, setNumber] = React.useState(useLender((state) => state.lender.phone_number.toString))
  const [email, setEmail] = React.useState(useLender((state) => state.lender.email_address))
  const [business, setBusiness] = React.useState(useLender((state) => state.lender.business_name))
  const id = useLender((state) => state.lender.lender_id);
  const [loading, setLoading] = React.useState(false)
  const { addMessage } = useMessages()
  const { setLender } = useLender()

  //functions
  const handleClose = () => {
    if(!loading){
    navigate(paths.dashboard)
    setOpen(false);
    }
  };

  const handleUsername = (e: string) => {
      setUsername(e)
  };

  const handlePassword = (e : string ) => {
    setPassword(e)
  }

  const handleInterest = (e : string) => {
    setInterest(e)
  }
  
  const handleNumber = (e : string) => {
    setNumber(e)
  }

  const handleEmail = (e : string) => {
    setEmail(e)
  }

  const handleBusiness = (e : string) => {
    setBusiness(e)
  }

  const handleSave = async () => {
    setLoading(true);
    try{
      const {data, error} = await supabase.from("Lenders").update({
        "username" : username,
        "password" : password,
        "interest_rate" : interest,
        "phone_number" : number,
        "email_address" : email,
        "business_name" : business
      }).eq("lender_id", id).select( "lender_id, business_name, phone_number, email_address, interest_rate, username, password" )

      if(error) {
        throw error;
      }

      setLender(data[0]);
      addMessage({message: "Settings Saved", serverity: "success"})
      navigate(paths.dashboard);

    }catch(error){
        addMessage({message: "Error Saving Settings", serverity: "error"})
    }

    navigate(paths.dashboard)
    setOpen(false);
  }
 
  //jsx
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Account Settings"
        aria-describedby="Settings"
      >
        <DialogTitle id="Account Settings" style={{marginBottom: '5%'}}>
          {"Account Settings"}
        </DialogTitle>
        <DialogContent>
          <Grid container px={3.75} spacing={3.75}>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
              <TextField color="primary" type='text'variant='outlined' label='Username' size='small' value={username} onChange={(e)=> {handleUsername(e.target.value)}} />
            </Grid>
            <Grid item xs={12}>
            <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
            <TextField color="primary" type='password' variant='outlined' label='Password' size='small' value={password} onChange={(e) => {handlePassword(e.target.value)}}/>
            </Grid>
            <Grid item xs={12}>
            <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
            <TextField color="primary" type='number' variant='outlined' label='Interest Rate (%)' size='small' value={interest} onChange={(e) => {handleInterest(e.target.value)}} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
              <TextField color="primary" type='text' variant='outlined' label='Phone Number' value={number} size='small' onChange={(e) => {handleNumber(e.target.value)}} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
              <TextField color="primary" type='email' variant='outlined' label='Email Address' value={email} size='small' onChange={(e) => {handleEmail(e.target.value)}} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
              <TextField color="primary" type='text' variant='outlined' label='Business Name' value={business} size='small' onChange={(e) => {handleBusiness(e.target.value)}} />
            </Grid>
          </Grid>

        </DialogContent>
          {!loading ? <DialogActions>
          <Button color='primary' onClick={handleClose}>Exit</Button>
          <Button onClick={handleSave} autoFocus>
            Save & Exit
          </Button>
        </DialogActions> :
        <LinearProgress />}
      </Dialog>
    </React.Fragment>
  );
}
