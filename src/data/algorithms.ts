import { BorrowerData, useBorrowerData } from "Store/Borrower";
import { supabase } from "./database";
import { useMessages } from "Store/Error";
import { useLoanData, LoanData } from "Store/Loan";
import { useNotifications } from "Store/Notification";
import { LenderInfo, useLender } from "Store/Lender";
import { useNavigate } from "react-router-dom";
import { useSession } from "Store/Store";
import paths from "routes/paths";

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
            const { data, error } = await supabase.from("getborrowers").select("id, name, phone_number, email_address, status").eq("id", ID);
        
            if (error) {
                throw error;
            }
        
            const borrowers: BorrowerData[] = data.map((Borrower: {
                id: string;
                name: string;
                phone_number: string;
                email_address: string;
                status: string;
            }) => ({
                id: Borrower.id,
                borrowerName: Borrower.name,
                phonenumber: Borrower.phone_number,
                email: Borrower.email_address,
                Status: Borrower.status
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
            const { data, error } = await supabase.from("getloans").select("id, name, amount, status, type, monthstorepay").eq("lender_id", ID);

            if (error) {
                throw error;
            }

            const loans: LoanData[] = data.map((loan: 
                { id: string; 
                name: string; 
                amount: number; 
                status: string ;
                type : string;
                monthstorepay : number}) => ({
                    id: loan.id,
                    borrowerName: loan.name,
                    owing: loan.amount,
                    status: loan.status,
                    type: loan.type,
                    monthstorepay: loan.monthstorepay,
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

    async get_loan_history (ID : string) {
        const { setloans } = useLoanData();
        const { addMessage } = useMessages();
        try {
            if (!ValidationSet.isset(ID)){
                throw new Error("Please Login");
            }
            const { data, error } = await supabase.from("getloans").select("id, name, amount, status, type, monthstorepay").eq("lender_id", ID);

            if (error) {
                throw error;
            }

            const loans: LoanData[] = data.map((loan: 
                { id: string; 
                name: string; 
                amount: number; 
                status: string ;
                type : string;
                monthstorepay : number}) => ({
                    id: loan.id,
                    borrowerName: loan.name,
                    owing: loan.amount,
                    status: loan.status,
                    type: loan.type,
                    monthstorepay: loan.monthstorepay,
                }));

            setloans(loans);
            addMessage({ message: "Loan data fetched successfully", serverity: "success" });
        } catch (error) {
            if (error instanceof Error) {
                addMessage({ message: error.message, serverity: "error" });
            } else {
                addMessage({ message: "Failed to get loan history. Check Internet Connectivity", serverity: "error" });
            }
        }
    }
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
                    "Interest_rate" : InterestRate,
                    "phone_number" : PhoneNumber,
                    "email_address" : Email,
                    "business_name" : BusinessName
                }).eq("id", ID).select( "id, business_name, phone_number, email_address, Interest_rate, username, password");
        
                if(error) {
                    throw error;
                }
        
                setLender(data[0]);
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
    async login (Username : string , Password : string) {
            const navigate = useNavigate();
            const{addMessage} = useMessages();
            const {setLender} = useLender();
        try{
            const {data, error} = await supabase.from("lender").select(
                "id, business_name, phone_number, email_address, Interest_rate, username, password"
            ).eq("username", Username).eq("password", Password);
            if (error) {
                throw error;
            }
            if (data?.length === 0) {
                addMessage({message: "Invalid username or password", serverity: "error"})
                throw error;
            }
            const lender : LenderInfo = data![0];
            setLender(lender)

            addMessage({message: "Login successful", serverity: "success"})
            useSession.setState({isLogged : true})
            navigate(paths.dashboard)
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
