import {create} from "zustand"

type UpdateUser = {
    isOpen : boolean;
}

/*
this state manages the opening and closing of the modal in @File : // update User
*/
export const useUpdateUserActions = create<UpdateUser>(() => ({
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
    isLogged : false
}))
//end of login state

type FieldSettings = {
    isOpen : boolean;
}

export const useFieldSettings = create <FieldSettings> (() => ({
    isOpen : false
}))

type PersonalData = {
    isOpen : boolean;
}

export const usePersonalData = create <PersonalData> (() => ({
    isOpen : false
}))

type OpenVet = {
    isOpen : boolean
}

export const useOpenVet = create <OpenVet> (() =>({
    isOpen :false
}))

type OpenLogin = {
    isOpen : boolean
}

export const useOpenLogin = create <OpenLogin> (() => ({
    isOpen : true
}))