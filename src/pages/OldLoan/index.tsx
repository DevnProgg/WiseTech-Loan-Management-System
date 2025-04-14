import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider, Grid, TextField, Typography, Autocomplete, LinearProgress, Alert } from '@mui/material';
import { useOpenCard} from 'Store/Store';
import { supabase } from 'data/database';
import { useVet } from 'Store/Borrower';
import { useDataChange } from 'Store/DataChange';
import { useMessages } from 'Store/Error';
import { useLender } from 'Store/Lender';


export default function OldLoan() {
  const open = useVet((state) => (state.isVet))
  const [borrower, setBorrower] = React.useState("");
  const [loan, setLoan] = React.useState(0);
  const [date, setDate] = React.useState("");
  const [borrowers, setBorrowers] = React.useState<{ label: string }[]>([])
  const id = useLender((state) => state.lender.id)
  const {setLoanChange} = useDataChange()
  const {addMessage} = useMessages()
  const [loading, setLoading] = React.useState(false)
  const [fail, setFail] = React.useState(false)

  const handleClose = () => {
    if(!loading){
    useOpenCard.setState({openCard: false})
    useVet.setState({isVet: false})
    }
  };

  const handleSubmit = async () => {
    try {
      const {data, error} = await supabase.from('getborrowers').select("id").eq('name', borrower)

      if(error) {
        throw error
      }

      if(data) {
        const borrower_id : string = data[0]?.id
        const {data: loanData, error: loanError} = await supabase.from('loan').insert({
          'id' : id,
          'borrower_id' : borrower_id, 
          'amount': loan, 
          'start_payment_date' : date, })

        if(loanError) {
          throw loanError
        }

        if(loanData) {
          console.log(loanData)
        }
      }

      setLoanChange()
      addMessage({message: "Loan Added Successfully", serverity : "success"})
      handleClose()
    }catch(error) {
      setFail(true);
      addMessage({message: "Failed To Add Loan", serverity: "error"})
    }
  }

  React.useEffect(() => {
    const fetchData = async () => {
      try{
        const {data, error} = await supabase.from('getborrowers').select("name").eq('id', id)

        if(error) {
          throw error
        }

        if(data) {
          setBorrowers(data.map((item: { name: string }) => ({ label: item.name })))
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
  {fail ? <Alert severity="error">Failed To Add Loan</Alert> : null}
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
      <TextField color="primary" type='number' variant='outlined' label='Additional Loan Amount' size='small' value={loan} onChange={(e) => {setLoan(Number(e.target.value))}} />
    </Grid>

    <Grid item xs={12}>
      <Typography variant='h6' gutterBottom style={{color: "white"}}>.</Typography>
      <TextField color='primary' type='date' variant='outlined' label='Loan Date' size='small' value={date} onChange={(e) => {setDate(e.target.value)}}/>
    </Grid>

  </Grid>

</DialogContent>
{
  !loading ?  <DialogActions>
  <Button variant="text" color="secondary" onClick={handleClose}>Cancel</Button>
  <Button variant="contained" onClick={() => {setLoading(true); handleSubmit()}} autoFocus>
    Add Loan
  </Button>
</DialogActions> : <LinearProgress />
}
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
