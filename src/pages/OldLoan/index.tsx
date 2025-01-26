import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider, Grid, TextField, Typography, Autocomplete } from '@mui/material';
import { useLender, useOpenCard, useVet } from 'Store';
import { supabase } from 'data/database';


export default function OldLoan() {
  const open = useVet((state) => (state.isVet))
  const handleClose = () => {
    useOpenCard.setState({openCard: false})
    useVet.setState({isVet: false})
  };
  const [borrower, setBorrower] = React.useState("");
  const [loan, setLoan] = React.useState("0");
  const [date, setDate] = React.useState("");
  const [borrowers, setBorrowers] = React.useState<{ label: string }[]>([])
  const id = useLender((state) => state.lender.lender_id)
 
  const handleSubmit = async () => {
    try {
      const {data, error} = await supabase.from('getborrowers').select("borrower_id").eq('names', borrower)

      if(error) {
        throw error
      }

      if(data) {
        const borrower_id : string = data[0]?.borrower_id
        const {data: loanData, error: loanError} = await supabase.from('loans').insert({'lender_id' : id, 'borrower_id' : borrower_id, 'amount': loan, 'pay_date' : date, 'status' : 'pending'})

        if(loanError) {
          throw loanError
        }

        if(loanData) {
          console.log(loanData)
        }
      }
    }catch(error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    const fetchData = async () => {
      try{
        const {data, error} = await supabase.from('getborrowers').select("names").eq('lender_id', id)

        if(error) {
          throw error
        }

        if(data) {
          setBorrowers(data.map((item: { names: string }) => ({ label: item.names })))
        }
      }catch(error) {
        console.log(error)
    }
  }
      fetchData();
  }, [])

  const element = <>
  <DialogTitle id="Add Loan" style={{marginBottom: '5%', textAlign: "center"}}>
  {"Add Loan"}
</DialogTitle>
<DialogContent>
  <Grid container px={3.75} spacing={3.75}>

    <Grid item xs={12}>
      <Divider>Search Borrower</Divider>
    </Grid>

    <Grid item xs={12}>
      <Autocomplete 
          options={borrowers}
          clearOnEscape
          renderInput={(params) => (
            <TextField {...params} color="primary" type='text' variant='outlined' placeholder='eg. Thato John Qothi' size='small' value={borrower} onChange={(e) => { setBorrower(e.target.value); } } />)} />
    </Grid>

    <Grid item xs={12}>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField color="primary" type='number' variant='outlined' label='Additional Loan Amount' size='small' value={loan} onChange={(e) => {setLoan(e.target.value)}} />
    </Grid>

    <Grid item xs={12}>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField color='primary' type='date' variant='outlined' label='Loan Date' size='small' value={date} onChange={(e) => {setDate(e.target.value)}}/>
    </Grid>

  </Grid>

</DialogContent>
<DialogActions>
  <Button variant="text" color="secondary" onClick={handleClose}>Cancel</Button>
  <Button variant="contained" onClick={handleSubmit} autoFocus>
    Add Loan
  </Button>
</DialogActions>
</>


  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Add Loan"
        aria-describedby="Add Loan"
      >
        { 
        element
}
      </Dialog>
    </React.Fragment>
  );
}
