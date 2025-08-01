import {create} from 'zustand'

export interface monthly_turn_rate {
    id : number;
    month : string;
    year : string;
    revenue : number;
}

interface _MTR {
    current_revenue : number;
    data : number [];
    last_month : string;
    mtr : monthly_turn_rate[];
    setMTR : (mtr : monthly_turn_rate[]) => void;
    setRev : (rev : number) => void;
    setMonth : (month : string) => void;
}

export const useMTR = create<_MTR> ((set) => ({
    current_revenue :  50,
    data : [0,0,0,0,0,0,0,0,0,0,0,0,0],
    last_month : "May",
    mtr : [],
    setMTR : (mtr) => set({mtr : mtr}),
    setRev : (rev) => set({current_revenue : rev}),
    setMonth : (month) => set({last_month : month})
}))