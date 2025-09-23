import { BorrowerData, useBorrowerData } from "Store/Borrower";
import { supabase } from "./database";
import { useMessages } from "Store/Error";
import { useLoanData, LoanData } from "Store/Loan";
import { useNotifications } from "Store/Notification";
import { UpdateInfo, useLender } from "Store/Lender";
import { useOpenLogin} from "Store/Login";

const ValidationSet = {
    isset (StringVar : string) {
        if (StringVar.length === 0){
            return false;
        }
        return true;
    }
};

export const RetrieveData = {
    
    async get_borrowers (ID : string) {
        const { setBorrowers } = useBorrowerData();
        const { addMessage } = useMessages();
        try {
            if (!ValidationSet.isset(ID)){
                throw new Error("Please Login");
            }
            const { data, error } = await supabase.from("lender_borrower").select("id, borrower_name, phone_number, email_address").eq("id", ID);
        
            if (error) {
                throw error;
            }
        
            const borrowers: BorrowerData[] = data.map((Borrower: {
                id: string;
                borrower_name: string;
                phone_number: number;
                email_address: string;
            }) => ({
                id: Borrower.id,
                borrower_name: Borrower.borrower_name,
                phone_number: Borrower.phone_number,
                email_address: Borrower.email_address,
            }));
        
            setBorrowers(borrowers);
            addMessage({ message: "Borrower data fetched successfully", serverity: "success" });
        } catch (error) {
            if (error instanceof Error) {
                addMessage({ message: error.message, serverity: "error" });
            } else {
                addMessage({ message: "Failed to get borrowers", serverity: "error" });
            }
        }
    },
    
    async get_active_loans (ID : string) {
        const { setloans } = useLoanData();
        const { addMessage } = useMessages();
        try {
            if (!ValidationSet.isset(ID)){
                throw new Error("Please Login");
            }
            const { data, error } = await supabase.from("borrower_loans").select("id, amount, loan_status, start_payment_date, duration, borrower_name").eq("lender_id", ID);

            if (error) {
                throw error;
            }

            const loans: LoanData[] = data.map((loan: 
                { id: string; 
                amount: number; 
                loan_status: string;
                start_payment_date: number;
                duration : number;
                borrower_name : string}) => ({
                    id: loan.id,
                    amount : loan.amount,
                    loan_status : loan.loan_status,
                    start_payment_date : loan.start_payment_date,
                    duration : loan.duration,
                    borrower_name : loan.borrower_name
                }));

            setloans(loans);
            addMessage({ message: "Loan data fetched successfully", serverity: "success" });
        } catch (error) {
            if (error instanceof Error) {
                addMessage({ message: error.message, serverity: "error" });
            } else {
                addMessage({ message: "Failed to get loans", serverity: "error" });
            }
        }
    },

    async get_notifications () {
        const { setNotifications } = useNotifications();
        const { addMessage } = useMessages();
        try {
            const { data, error } = await supabase.from('notifications').select('*');

            if (error) {
                throw error;
            }

            const notifications = data.map((notification: {
                id: number;
                title: string;
                message: string;
                date: string;
            }) => ({
                id: notification.id,
                title: notification.title,
                message: notification.message,
                date: notification.date,
            }));


            setNotifications(notifications);
            addMessage({ message: "Notifications fetched successfully", serverity: "success" });

        } catch (error) {
            if (error instanceof Error) {
                addMessage({ message: error.message, serverity: "error" });
            } else {
                addMessage({ message: "Failed to get Notifications", serverity: "error" });
            }
        }
    },
};

export const SendData = {
    
    async update_settings (ID : string, InterestRate : string, PhoneNumber : string, Email : string, BusinessName :string){
            const { addMessage } = useMessages()
            const { setLender } = useLender()
            try{
                if (!ValidationSet.isset(InterestRate) || !ValidationSet.isset(PhoneNumber) || !ValidationSet.isset(Email) || !ValidationSet.isset(BusinessName)){
                    throw new Error("Make sure the fields are not empty");
                }
                else if (!ValidationSet.isset(ID)){
                    throw new Error("Please Login");
                }
                const {data, error} = await supabase.from("lender").update({
                    "interest_rate" : InterestRate,
                    "phone_number" : PhoneNumber,
                    "email_address" : Email,
                    "business_name" : BusinessName
                }).eq("id", ID).select( "business_name, phone_number, email_address, Interest_rate");
        
                if(error) {
                    throw error;
                }
                
                const result: UpdateInfo = {
                    "business_name" : String(data[0].business_name),
                    "email_address" : String(data[0].email_address),
                    "interest_rate" : Number(data[0].Interest_rate),
                    "phone_number" : Number(data[0].phone_number)

                }
                setLender(result);
                addMessage({message: "Settings Updated", serverity: "success"});
        
            }catch(error){
                if (error instanceof Error) {
                addMessage({ message: error.message, serverity: "error" });
            } else {
                addMessage({ message: "Failed to update settings. Check Internet Connectivity", serverity: "error" });
            }
            }
    }
};

export const Authenticate = {
    async getID (Usr : string, Psswd : string){
            const{addMessage} = useMessages();
        try{
            const {data, error} = await supabase.from("credentials").select("lender_id").eq("username", Usr).eq("user_password", Psswd);
            if (error) {
                throw error;
            }
            else 
                if (data?.length === 0) {
                    throw Error("Invalid username or password");
                }
            return String(data[0].lender_id);
        }
        catch(error){
            if (error instanceof Error){
                addMessage({message: error.message, serverity: "error"});
            }
            else {
                addMessage({message: "Check Internet connectivity", serverity: "error"});
            }
            return " ";
        }
    },
    async login (Username : string , Password : string) {
            const{addMessage} = useMessages();
            const {setLender} = useLender();
            const {setID} = useLender();
            let lender_id;
        try{
                lender_id = await this.getID(Username, Password);
                const {data, error} = await supabase.from("lender").select("business_name, phone_number, email_address, interest_rate").eq("lender_id" , lender_id)
                
                if (error){
                    throw error;
                }else if (data.length === 0){
                    throw Error("Invalid username or password");
                }

                const lender : UpdateInfo = {
                    "business_name" : String(data[0].business_name),
                    "email_address" : String(data[0].email_address),
                    "interest_rate" : Number(data[0].interest_rate),
                    "phone_number" : Number(data[0].phone_number)
                };
                setLender(lender);
                setID(lender_id);
                useOpenLogin.setState({isOpen : false});

        }
        catch(error){
            if (error instanceof Error){
                addMessage({message: error.message, serverity: "error"});
            }
            else {
                addMessage({message: "Check Internet connectivity", serverity: "error"});
            }
        }
    }
}

export const Analytics = {
    
}

export const dumpState = () => {

}