import {create} from "zustand"

//state managing loan data

export interface LoanData {
    id: string;
    amount : number;
    loan_status : string;
    start_payment_date : number;
    duration : number;
    borrower_name : string;
}

interface LoanDataState {
    loans : LoanData[];
    setloans : (loanss : LoanData[]) => void;

}

export const useLoanData = create <LoanDataState> ((set) => ({
    loans : [
        {
            id : "RehTha-1-1",
            amount : 1500.00,
            loan_status : "Pending",
            start_payment_date : 25,
            duration : 1 ,
            borrower_name : "Relebohile Thato"
        },
        {
            id : "LehMoh-1-1",
            amount : 2500.00,
            loan_status : "Paid",
            start_payment_date : 30,
            duration : 0 ,
            borrower_name : "Lerato Mohapi"
        }
    ],
    setloans : (loanss) => set({loans : loanss}),
}))

//end of loan data