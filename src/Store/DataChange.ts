import {create} from "zustand"

//state managing data changes
export interface DataChange {
    loanChange : number;
    borrowerChange : number;
    notificationChange : number;
    setLoanChange : () => void;
    setBorrowerChange : () => void;
    setNotificationChange : () => void;
}

export const useDataChange = create<DataChange> ((set) => ({
    loanChange : 0,
    borrowerChange : 0,
    notificationChange : 0,
    setLoanChange : () => set((state) => ({loanChange : state.loanChange + 1})),
    setBorrowerChange : () => set((state) => ({borrowerChange : state.borrowerChange + 1})),
    setNotificationChange : () => set((state) => ({notificationChange : state.notificationChange + 1}))
}))
 