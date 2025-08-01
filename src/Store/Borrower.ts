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
    id : string;
    borrower_name : string;
    phone_number : number;
    email_address : string;
}

interface BorrowerDataState {
    borrowers : BorrowerData[];
    setBorrowers : (borrowerss : BorrowerData[]) => void;
}

export const useBorrowerData = create<BorrowerDataState> ((set) => ({
    borrowers : [
        {
            id : "LehMoh-1",
            borrower_name : "Lerato Mohapi",
            phone_number : 57502734,
            email_address : "lerato@gmail.com"
        },
        {
            id : "RelTha-1",
            borrower_name : "Relebohile Thato",
            phone_number : 59952834,
            email_address : "Relebohile@gmail.com"
        }
    ],
    setBorrowers : (borrowerss) => set({borrowers : borrowerss}),
}))

//end of borrower data