import {create} from "zustand"

type PersonalData = {
    isOpen : boolean;
}

export const usePersonalData = create <PersonalData> (() => ({
    isOpen : false
}))
