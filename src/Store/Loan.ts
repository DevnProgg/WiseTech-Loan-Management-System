import {create} from "zustand"

//state managing loan data

export interface LoanData {
    id: string;
    borrowerName: string;
    owing: number;
    status: string;
    type: string;
    monthstorepay: number;
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