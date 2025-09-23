import {create} from "zustand"

type FieldSettings = {
    isOpen : boolean;
}

export const useFieldSettings = create <FieldSettings> (() => ({
    isOpen : false
}))