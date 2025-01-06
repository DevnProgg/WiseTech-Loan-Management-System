import { Fab } from "@mui/material";
import { useOpenCard } from "Store";

interface FabStyle {
    position: 'fixed';
    bottom: number;
    right: number;
  }

export default function FAB(props : {styles: FabStyle}) {
  return (
    <Fab color="primary" aria-label="add new loan" style={props.styles} onClick={()=>{useOpenCard.setState({openCard: true})}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-24">
          <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        </svg>
    </Fab>
  )
}
