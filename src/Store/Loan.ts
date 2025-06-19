import {create} from "zustand"

//state managing loan data

export interface LoanData {
    loan_id: string;
    amount : number;
    loan_status : string;
    start_payment_date : number;
    duration : number;
    borrowe_id : string;
}

interface LoanDataState {
    loans : LoanData[];
    setloans : (loanss : LoanData[]) => void;

}

export const useLoanData = create <LoanDataState> ((set) => ({
    loans : [],
    setloans : (loanss) => set({loans : loanss}),
}))

//end of loan data