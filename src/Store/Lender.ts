import {create} from "zustand"


//store Lender infomation

export type UpdateInfo = {
    interest_rate : number;
    phone_number : number;
    email_address : string;
    business_name : string;
}

interface LenderInfoState {
    id : string;
    lender : UpdateInfo;
    setLender : (lender : UpdateInfo) => void;
    setID : (ID : string) => void;
}

export const useLender = create <LenderInfoState> ((set) => ({
    id : "",
    lender : {
        business_name : "Client Lending Business",
        phone_number : 57502734,
        email_address : "client@wisetech.com",
        interest_rate : 25
    },
    setLender : (lender) => set({lender : lender}),
    setID : (ID : string) => set({id : ID}),
    
}))
//end of lender info