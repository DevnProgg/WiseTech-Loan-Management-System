import {create} from "zustand"


//store Lender infomation
export type LenderInfo = {
    id: string;
	business_name : string;
	phone_number : number;
	email_address : string;
	Interest_rate : number;
}

interface LenderInfoState {
    lender : LenderInfo;
    setLender : (lender : LenderInfo) => void;
}

export const useLender = create <LenderInfoState> ((set) => ({
    lender : {
        id : "",
        business_name : "",
        phone_number : 0,
        email_address : "",
        Interest_rate : 0
    },
    setLender : (lender) => set({lender : lender}),
    
}))
//end of lender info