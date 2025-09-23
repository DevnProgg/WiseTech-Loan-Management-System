import { create } from "zustand";

type AddLoan = {
    openCard: boolean;
    setOpenCard : (input : boolean) => void;
}

export const useAddLoan = create<AddLoan>(() => ({
    openCard : false,
    setOpenCard : () => {}
}))
