import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useFieldStore } from "Store/Fields";
import { usePersonalData } from "Store/Store";


export default function PersonalData () {

    const open = usePersonalData((state) => (state.isOpen))

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
              <Button color="primary" variant="outlined" style={{color: "grey-text"}} onClick={handleClose} >Cancel</Button>
              <Button color="primary" variant="contained">Next</Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
}