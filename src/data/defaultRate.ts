export interface LoanData {
    month: string; 
    totalLoans: number; 
    defaultedLoans: number; 
  }
  
  export const defaultRateData: LoanData[] = [
    { month: "January", totalLoans: 1000, defaultedLoans: 500 },
  ];