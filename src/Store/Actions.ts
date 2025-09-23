import { create } from "zustand";

type Actions = {
    isOpen : boolean;
}

/*
this state manages the opening and closing of the modal in @File : // update User
*/
export const useActions = create<Actions>(() => ({
    isOpen : false
}))