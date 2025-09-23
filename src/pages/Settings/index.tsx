import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import paths from 'routes/paths';
import {Grid, Icon, LinearProgress, Stack, TextField, Typography } from '@mui/material';
import { useLender } from 'Store/Lender';
import { useFieldSettings } from 'Store/FieldSettings';
import { useFieldStore } from 'Store/Fields';
import { SendData } from 'data/algorithms';

export default function Settings() {

  //state
  const navigate = useNavigate();
  const [interest, setInterest] = React.useState(useLender((state) => state.lender.interest_rate.toString()))
  const [phone_number, setPhoneNumber] = React.useState(useLender((state) => state.lender.phone_number.toString()))
  const [email, setEmail] = React.useState(useLender((state) => state.lender.email_address))
  const [business, setBusiness] = React.useState(useLender((state) => state.lender.business_name))
  const id = useLender((state) => state.id);
  const [loading, setLoading] = React.useState(false)
  const settings = useFieldStore((state) => (state.fields));

  const handleClose = () => {
    if(!loading){
    navigate(paths.dashboard)
    }
  };

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
    SendData.update_settings(id, interest, phone_number, email, business);
    navigate(paths.dashboard)
  }

  //jsx
  return (
    <React.Fragment>
      <Grid container px={3.75} spacing={3.75} style={{ marginTop : "5%"}}>
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
                    <Button variant='contained' onClick={() => {
                      useFieldSettings.setState({isOpen : true})
                    }}> Add New Field </Button>
                  </Stack>
                  </>}
                </DialogTitle>
                <Grid item xs={12}>
                  <Grid container spacing={1}>
                    {settings.map((field => {
                      return (
                        <Grid item xs={12}>
                        <Stack key={field.id} spacing={0.1} style={{border: "3px solid #e9e9ed", padding: "2%", borderRadius: "10px", width : "100%"}} direction={"column"}>
                          <Stack direction="row" spacing={3.75}>
                            <Icon>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M20.198 3H3.802C3.05147 3 2.6762 3 2.41637 3.17726C2.28768 3.26505 2.18133 3.38109 2.10567 3.51627C1.9529 3.78921 1.99024 4.15793 2.06493 4.89537C2.18958 6.12624 2.2519 6.74168 2.57823 7.18168C2.74084 7.40095 2.94701 7.58519 3.18414 7.72315C3.65999 8 4.28635 8 5.53908 8H18.4609C19.7136 8 20.34 8 20.8159 7.72315C21.053 7.58519 21.2592 7.40095 21.4218 7.18168C21.7481 6.74168 21.8104 6.12624 21.9351 4.89537C22.0098 4.15793 22.0471 3.78921 21.8943 3.51627C21.8187 3.38109 21.7123 3.26505 21.5836 3.17726C21.3238 3 20.9485 3 20.198 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3 8L3 13.0408C3 16.7928 3 18.6688 4.17157 19.8344C5.34315 21 7.22876 21 11 21H13C16.7712 21 18.6569 21 19.8284 19.8344C21 18.6688 21 16.7928 21 13.0408V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 11H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            </Icon>
                            <Typography variant='h5'>{field.label}</Typography>
                          </Stack>
                          <Stack style={{paddingLeft: "15%"}}>
                              <Typography variant='body2' >Type : {field.type}</Typography>
                          </Stack>
                          <Stack style={{paddingLeft: "75%"}}>
                            <Button variant='contained' onClick={() => {
                              useFieldStore.getState().removeField(field.id)
                            }}> Delete </Button>
                          </Stack>
                        </Stack>
                        </Grid>
                      )
                    }
                    ))}
                  </Grid>
                </Grid>
                </Grid>
            </Grid>
          </Grid>
    </React.Fragment>
  );
}
