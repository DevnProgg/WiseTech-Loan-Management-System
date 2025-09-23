import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Grid } from '@mui/material';
import { useActions } from 'Store/Actions';


export default function Actions() {
  //state
  const open = useActions((state) => (state.isOpen))

  //functions
  const handleClose = () => {
    useActions.setState({isOpen: false})
  };

  //jsx
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Loan Actions"
        aria-describedby="Loan Actions"
      >
      <DialogTitle id="Loan Actions" style={{marginBottom: '5%', textAlign: "center", fontWeight: 500}}>
  {"Actions"}
</DialogTitle>
<DialogContent>
  <Grid container px={3.75} spacing={3.75}>

    <Grid item xs={12}>

      <Button fullWidth variant='contained'>Add Manual Cash Payment</Button>

    </Grid>

    <Grid item xs={12}>
      <Button fullWidth variant='contained'>See Full Details</Button>
    </Grid>

  </Grid>

</DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
