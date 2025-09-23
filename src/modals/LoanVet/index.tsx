import { Dialog, DialogContentText, DialogActions, Button } from "@mui/material";
import React from "react";
import { useVet } from 'Store/Borrower';
import { useOpenVet } from "Store/Vet";
import { usePersonalData } from "Store/PersonalData";

export default function Vet () {
    const open = useOpenVet((state) => (state.isOpen))
    const handleClose = () => {
        useOpenVet.setState({isOpen: false})
    }

    return(
        <React.Fragment>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="Add Loan"
                aria-describedby="Add Loan"
              >
                <DialogContentText>Is this a new Borrower?</DialogContentText>
<DialogActions>
  <Button variant="text" onClick={()=>{
    useVet.setState({isVet: true})
  }}> No </Button>
  <Button variant="contained" color="primary"  onClick={() => {usePersonalData.setState({isOpen: true})}}> Yes </Button>
</DialogActions>
              </Dialog>
              </React.Fragment>
    )
}