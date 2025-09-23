import {create} from "zustand"

type OpenLogin = {
    isOpen : boolean
}

export const useOpenLogin = create <OpenLogin> (() => ({
    isOpen : true
}))