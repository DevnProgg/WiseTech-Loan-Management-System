import {create} from "zustand"


//store Lender infomation
export type LenderInfo = {
    id: string;
	business_name : string;
	phone_number : number;
	email_address : string;
	interest_rate : number;
}

interface LenderInfoState {
    lender : LenderInfo;
    setLender : (lender : LenderInfo) => void;
}

export const useLender = create <LenderInfoState> ((set) => ({
    lender : {
        id : "lender 1",
        business_name : "Client Lending Business",
        phone_number : 57502734,
        email_address : "client@wisetech.com",
        interest_rate : 25
    },
    setLender : (lender) => set({lender : lender}),
    
}))
//end of lender info