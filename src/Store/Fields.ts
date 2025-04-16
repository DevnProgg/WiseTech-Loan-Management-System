import {create} from 'zustand'

export type Field = {
    id : string
    label : string
    type : string
}

type fieldState = {
    fields : Field[]
    addField : (field: Omit<Field, 'id'>) => void;
    updateField :  (id : string, key : keyof Field) => void;
    removeField : (id : string) => void;
}

export const useFieldStore = create<fieldState>((set) => ({
    fields : [],
    addField : (field) => set((state) => ({fields : [...state.fields, {...field, id : crypto.randomUUID()}]})),
    updateField : (id, key) => set((state) => ({fields : state.fields.map((field) => field.id === id ? {...field, [key] : field[key]} : field)})),
    removeField : (id) => set((state) => ({fields : state.fields.filter((field) => field.id !== id)}))
}))

