import {create} from "zustand"

type AddLoan = {
    openCard: boolean;
    setOpenCard : (input : boolean) => void;
}

export const useOpenCard = create<AddLoan>(() => ({
    openCard : false,
    setOpenCard : () => {}
}))

type Login = {
    islogged : boolean;
}

export const useLogin = create<Login>(() => ({
    islogged : false,
}))

type UpdateUser = {
    isOpen : boolean;
}

export const useUpdateUser = create<UpdateUser>(() => ({
    isOpen : false,
}))

type anchorEl = {
    anchorEl : Element | null;
}

export const useAnchorEl = create<anchorEl>(() => ({   
    anchorEl : null
}))