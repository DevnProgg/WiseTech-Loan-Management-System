import { TextField, Typography, Grid, DialogActions, Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { Field, useFieldStore } from 'Store/Fields';
import { useFieldSettings } from 'Store/FieldSettings';

export function AddFields () {

    const open : boolean= useFieldSettings((state) => (state.isOpen))
    const ID : string = ""
    const [name , setName] = useState('')
    const [Type, setType] = useState("text")
    let form : Field;

    const handleClose = () => {
        useFieldSettings.setState({isOpen : false})
    }

    const handleAdd = () => {
        form = {
            id : ID,
            label : name,
            type : Type,
        }
        useFieldStore.getState().addField(form);
        handleClose();
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby='Add Field' aria-describedby='Add Field'>
                <DialogTitle id="Add Field" >
                    {"Add New Field"}
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h6' gutterBottom style={{color : "white"}} >.</Typography>
                            <TextField color='primary' type="text" variant='outlined' label="Name of Field" placeholder='Enter the name of new loan field' value={name} onChange={(e) => {setName(e.target.value)}} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color={"primary"} > Loan Field Type </Typography>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="loan-field"
                                    name="controlled-radio-buttons-group"
                                    value={Type}
                                    onChange={(e => {setType(e.target.value)})}>
                                    <FormControlLabel value="text" control={<Radio />} label="Text" />
                                    <FormControlLabel value="number" control={<Radio />} label="Number" />
                                    <FormControlLabel value="file" control={<Radio />} label="File" />
                                </RadioGroup>     
                            </FormControl>  
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='outlined' style={{color: "GrayText"}}>Cancel</Button>
                    <Button onClick={handleAdd} >Add</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}