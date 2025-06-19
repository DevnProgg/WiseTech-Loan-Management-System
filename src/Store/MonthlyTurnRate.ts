import {create} from 'zustand'

export interface monthly_turn_rate {
    id : number;
    month : string;
    year : string;
    revenue : number;
}

interface _MTR {
    mtr : monthly_turn_rate[];
    setMTR : (mtr : monthly_turn_rate[]) => void;
}

export const useMTR = create<_MTR> ((set) => ({
    mtr : [],
    setMTR : (mtr) => set({mtr : mtr}),
}))