import {create} from "zustand"

type UpdateUser = {
    isOpen : boolean;
}

export const useUpdateUser = create<UpdateUser>(() => ({
    isOpen : false
}))

type AddLoan = {
    openCard: boolean;
    setOpenCard : (input : boolean) => void;
}

export const useOpenCard = create<AddLoan>(() => ({
    openCard : false,
    setOpenCard : () => {}
}))


//state for managing logins
type Session = {
    isLogged : boolean;
}

export const useSession = create <Session> (() => ({
    isLogged : true
}))
//end of login state