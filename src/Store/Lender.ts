import {create} from "zustand"


//store Lender infomation
export type LenderInfo = {
    id: string;
	business_name : string;
	phone_number : string;
	email_address : string;
	Interest_rate : number;
	username : string;
	password : string;
}

interface LenderInfoState {
    lender : LenderInfo;
    setLender : (lender : LenderInfo) => void;
}

export const useLender = create <LenderInfoState> ((set) => ({
    lender : {
        id : "",
        business_name : "",
        phone_number : "",
        email_address : "",
        Interest_rate : 0,
        username : "",
        password : "",
    },
    setLender : (lender) => set({lender : lender}),
    
}))
//end of lender info