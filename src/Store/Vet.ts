import {create} from 'zustand'

type OpenVet = {
    isOpen : boolean
}

export const useOpenVet = create <OpenVet> (() =>({
    isOpen :false
}))