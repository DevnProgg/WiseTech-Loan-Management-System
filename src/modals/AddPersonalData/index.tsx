import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useFieldStore } from "Store/Fields";
import { usePersonalData } from "Store/PersonalData";
import { useAddLoan } from "Store/AddLoan";


export default function PersonalData () {

    const open = usePersonalData((state) => (state.isOpen))
    const [fullNames, setFullNames] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")

    const handleClose = () => {
        usePersonalData.setState({isOpen: false});
    }

    const fields: { id: string; label: string; type: string }[] = useFieldStore((state) => (state.fields));
    type schema = {
      name : string;
      value : string;
    }
    type schemaArray = {
      x : schema[]
    }
    const values: schemaArray = { x: [] };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        if (!values.x[index]) {
            values.x[index] = { name: fields[index].label, value: '' };
        }
        values.x[index].value = e.target.value;
    };

    const handleNext = () => {
        // Handle the next step logic here
        console.log(values.x); // You can use the values as needed
        handleClose(); // Close the dialog after handling the next 
        useAddLoan.setState({openCard: true}) // Open the next dialog or perform any other action
    }

    return (
        <React.Fragment>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="Add Personal Data"
            aria-describedby="Add Personal Data"
          >
            <DialogTitle id="Add Loan" style={{marginBottom: '5%', textAlign: "center"}}>
                {"Add New Loan"}
            </DialogTitle>
            <DialogContent>
              <Grid container px={3.75} spacing={3.75}>
              <Grid item xs={12}>
                <Divider>Personal Information</Divider>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" gutterBottom style={{color : "white"}}>.</Typography>
                <TextField variant="outlined" label="Full Names" type="text" value={fullNames} onChange={(e) => {setFullNames(e.target.value)}} color="primary" size="small" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" gutterBottom style={{color : "white"}}>.</Typography>
                <TextField variant="outlined" label="Phone Number" type="number" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}} color="primary" size="small" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" gutterBottom style={{color: 'white'}} >.</Typography>
                <TextField variant="outlined" label="Email Address" type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} color="primary" size="small" />
              </Grid>
              {
                fields.map((field, index) => {
                  return(
                    <Grid item xs={12} key={field.id}>
                      <Typography variant="body2" gutterBottom style={{color: "white"}} >.</Typography>
                      <TextField variant="outlined" label={field.label} type={field.type} value={values.x[index]?.value || ''} onChange={(e) => handleInputChange(e, index)} color="primary" size="small" />
                    </Grid>
                  )
                })
              }
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button color="primary" variant="outlined" style={{color: "grey"}} onClick={handleClose} >Cancel</Button>
              <Button color="primary" variant="contained" onClick={handleNext}>Next</Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
}