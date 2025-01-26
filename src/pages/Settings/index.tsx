import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import paths from 'routes/paths';
import {Grid, TextField, Typography } from '@mui/material';
import axios from "axios"

const api = axios.create({
  baseURL: 'http://localhost'
})

export default function Settings() {

  //state
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [interest, setInterest] = React.useState("0")
  const [number, setNumber] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [business, setBusiness] = React.useState("")
  const id = "";

  //functions
  const handleClose = () => {
    navigate(paths.dashboard)
    setOpen(false);
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

  const handleSave = () => {
    const requestBody = {
        "id" : id,
        "name" : business,
        "email" : email,
        "phone" : number,
        "interest" : interest,
        "username" : username,
        "password" : password
    }

    api.put('/api/v1/lender/update',requestBody).then((res) => {
      console.log(res)
    }).catch((e) => {
      console.log(e)
    })

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
        <DialogActions>
          <Button color='primary' onClick={handleClose}>Exit</Button>
          <Button onClick={handleSave} autoFocus>
            Save & Exit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
