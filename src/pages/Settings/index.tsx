import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import paths from 'routes/paths';
import {Grid, LinearProgress, Stack, TextField, Typography } from '@mui/material';
import { supabase } from 'data/database';
import { useMessages } from 'Store/Error';
import { useLender } from 'Store/Lender';


export default function Settings() {

  //state
  const navigate = useNavigate();
  const [username, setUsername] = React.useState(useLender((state) => state.lender.username))
  const [password, setPassword] = React.useState(useLender((state) => state.lender.password))
  const [interest, setInterest] = React.useState(useLender((state) => state.lender.Interest_rate.toString()))
  const [phone_number, setPhoneNumber] = React.useState(useLender((state) => state.lender.phone_number.toString()))
  const [email, setEmail] = React.useState(useLender((state) => state.lender.email_address))
  const [business, setBusiness] = React.useState(useLender((state) => state.lender.business_name))
  const id = useLender((state) => state.lender.id);
  const [loading, setLoading] = React.useState(false)
  const { addMessage } = useMessages()
  const { setLender } = useLender()

  //functions
  const handleClose = () => {
    if(!loading){
    navigate(paths.dashboard)
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
    setPhoneNumber(e)
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
      const {data, error} = await supabase.from("lender").update({
        "username" : username,
        "password" : password,
        "Interest_rate" : interest,
        "phone_number" : phone_number,
        "email_address" : email,
        "business_name" : business
      }).eq("id", id).select( "id, business_name, phone_number, email_address, Interest_rate, username, password" )

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
  }
 
  //jsx
  return (
    <React.Fragment>
      <Grid container px={3.75} spacing={3.75}>
        <Grid item xs={12} md={6}>
            <Grid container px={3.75} spacing={3.75} >
              <DialogTitle id="Account Settings" style={{width: "100%"}}>
                {"Account Settings"}
                {!loading ? <>
                  <br />
                  <Stack direction={"row"} spacing={3.75}>
                    <Button variant='outlined' style={{color : "#0a474a"}} onClick={handleClose}>Exit</Button>
                    <Button variant='contained' onClick={handleSave} autoFocus>
                      Save & Exit
                    </Button>
                  </Stack>
                </> :
                <LinearProgress />}
              </DialogTitle>
              <Grid item xs={12}>
                <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
                <TextField color="primary" type='text'variant='outlined' label='Username' size='small' value={username} onChange={(e)=> {handleUsername(e.target.value)}} fullWidth/>
              </Grid>
              <Grid item xs={12}>
              <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
              <TextField color="primary" type='text' variant='outlined' label='Password' size='small'  value={password} onChange={(e) => {handlePassword(e.target.value)}}fullWidth/>
              </Grid>
              <Grid item xs={12}>
              <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
              <TextField color="primary" type='number' variant='outlined' label='Interest Rate (%)'  size='small' value={interest} onChange={(e) => {handleInterest(e.target.value)}} fullWidth/>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
                <TextField color="primary" type='text' variant='outlined' label='Phone Number' value={phone_number}  size='small' onChange={(e) => {handleNumber(e.target.value)}} fullWidth/>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
                <TextField color="primary" type='email' variant='outlined' label='Email Address' value={email}  size='small' onChange={(e) => {handleEmail(e.target.value)}} fullWidth/>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
                <TextField color="primary" type='text' variant='outlined' label='Business Name' value={business} size='small'  onChange={(e) => {handleBusiness(e.target.value)}} fullWidth/>
              </Grid>
            </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container px={3.75} spacing={3.75}>
                <DialogTitle id="Account Settings" style={{width: "100%"}}>
                  {"Loan Settings"}
                  {<>
                  <br />
                  <Stack direction={"row"} spacing={3.75}>
                    <Button variant='contained'> Add New Field </Button>
                  </Stack>
                  </>}
                </DialogTitle>
                
                </Grid>
            </Grid>
          </Grid>
    </React.Fragment>
  );
}
