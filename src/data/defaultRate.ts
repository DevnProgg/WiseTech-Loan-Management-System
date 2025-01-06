export interface LoanData {
    month: string; // e.g., "January"
    totalLoans: number; // Total loans issued in the month
    defaultedLoans: number; // Loans that defaulted in the month
  }
  
  export const defaultRateData: LoanData[] = [
    { month: "January", totalLoans: 1000, defaultedLoans: 500 },
    { month: "February", totalLoans: 1500, defaultedLoans: 800 },
    { month: "March", totalLoans: 2000, defaultedLoans: 1800 },
    { month: "April", totalLoans: 2500, defaultedLoans: 1900 },
    { month: "May", totalLoans: 3000, defaultedLoans: 2643 },
    { month: "June", totalLoans: 3500, defaultedLoans: 2757 },
    { month: "July", totalLoans: 4000, defaultedLoans: 3082 },
    { month: "August", totalLoans: 4500, defaultedLoans: 3455 },
    { month: "September", totalLoans: 5000, defaultedLoans: 1453 },
    { month: "October", totalLoans: 5500, defaultedLoans: 1105 },
    { month: "November", totalLoans: 6000, defaultedLoans: 5223 },
    { month: "December", totalLoans: 6500, defaultedLoans: 5305 },
  ];