import {create} from "zustand"


//state if borrower is a veteran i.e is not new
type vetBorrower = {
    isVet : boolean;
}

export const useVet = create <vetBorrower> (() => ({
    isVet: false
}))
//end of veteran state

//state managing borrower data

export interface BorrowerData {
    borrower_id : string;
    borrower_name : string;
    phone_number : number;
    email_address : string;
}

interface BorrowerDataState {
    borrowers : BorrowerData[];
    setBorrowers : (borrowerss : BorrowerData[]) => void;
}

export const useBorrowerData = create<BorrowerDataState> ((set) => ({
    borrowers : [],
    setBorrowers : (borrowerss) => set({borrowers : borrowerss}),
}))

//end of borrower data