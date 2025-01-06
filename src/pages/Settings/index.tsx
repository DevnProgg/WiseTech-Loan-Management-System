import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import paths from 'routes/paths';
import {Grid, TextField, Typography } from '@mui/material';

export default function Settings() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    navigate(paths.dashboard)
    setOpen(false);
  };

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
              <TextField color="primary" type='text'variant='outlined' label='Username' value={"Techo Mice Lender"} size='small' />
            </Grid>
            <Grid item xs={12}>
            <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
            <TextField color="primary" type='password' variant='outlined' label='Password' value={"Password@123"} size='small' />
            </Grid>
            <Grid item xs={12}>
            <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
            <TextField color="primary" type='number' variant='outlined' label='Interest Rate (%)' value={20} size='small' />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
              <TextField color="primary" type='text' variant='outlined' label='Phone Number' value={57502734} size='small' />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
              <TextField color="primary" type='email' variant='outlined' label='Email Address' value={"microfinance@gmail.com"} size='small' />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
              <TextField color="primary" type='text' variant='outlined' label='Full Names' value={"Lauren Qokolo"} size='small' />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
              <TextField color="primary" type='text' variant='outlined' label='Business Name' value={"micro finance"} size='small' />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
              <TextField color="primary" type='text' variant='outlined' label='Business Address' value={"P. O. Box 12345, Nairobi"} size='small' />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
              <TextField color="primary" type='number' variant='outlined' label='Bank Account Number' value={434346236} size='small' />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
              <TextField color="primary" type='text' variant='outlined' label='Bank Name' value={"FNB"} size='small' />
            </Grid>
          </Grid>

        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={handleClose}>Exit</Button>
          <Button onClick={handleClose} autoFocus>
            Save & Exit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
