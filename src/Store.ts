import {create} from "zustand"

type AddLoan = {
    openCard: boolean;
    setOpenCard : (input : boolean) => void;
}

export const useOpenCard = create<AddLoan>(() => ({
    openCard : false,
    setOpenCard : () => {}
}))

type UpdateUser = {
    isOpen : boolean;
}

export const useUpdateUser = create<UpdateUser>(() => ({
    isOpen : false
}))


//state for managing logins
type Session = {
    isLogged : boolean;
}

export const useSession = create <Session> (() => ({
    isLogged : false
}))
//end of login state

//state if borrower is a veteran i.e is not new
type vetBorrower = {
    isVet : boolean;
}

export const useVet = create <vetBorrower> (() => ({
    isVet: false
}))
//end of veteran state

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

//state managing loan data

export interface LoanData {
    id: string;
    borrowerName: string;
    owing: number;
    status: string;
    type: string;
    monthstorepay: number;
}

interface LoanDataState {
    loans : LoanData[];
    setloans : (loanss : LoanData[]) => void;

}

export const useLoanData = create <LoanDataState> ((set) => ({
    loans : [],
    setloans : (loanss) => set({loans : loanss}),
}))

//end of loan data

//state managing borrower data

export interface BorrowerData {
    id : string;
    borrowerName : string;
    phonenumber : string;
    email : string;
    Status : string;
}

interface BorrowerDataState {
    borrowers : BorrowerData[];
    setBorrowers : (borrowerss : BorrowerData[]) => void;
}

export const useBorrowerData = create<BorrowerDataState> ((set) => ({
    borrowers : [],
    setBorrowers : (borrowerss) => set({borrowers : borrowerss}),
}))

//end of borrower data

//state managing notifications
export interface Notification {
    id: number;
    title: string;
    message: string;
    date: string;
}

interface NotificationState {
    notifications : Notification[];
    setNotifications : (notifications : Notification[]) => void;
}

export const useNotifications = create<NotificationState> ((set) => ({
    notifications : [],
    setNotifications : (notifications) => set({notifications : notifications}),
}))

//end

//state managing error and success messages

export interface Message {
    serverity : 'success' | 'error';
    message : string;
    timestamp : number;
}

interface MessageState {
    messages : Message[];
    addMessage : (message : Omit<Message, 'timestamp'>) => void;
    deleteMessage : (index : number) => void;
    deleteOldMessages : () => void;
}

export const useMessages = create<MessageState> ((set) => ({
    messages : [],
    addMessage : (newMessage) => set((state) => ({messages : [...state.messages, { ...newMessage, timestamp : Date.now()}]})),
    deleteMessage : (index) => set((state) => ({messages : state.messages.filter((_, i) => i !== index)})),
    deleteOldMessages: () => set((state) => ({
        messages: state.messages.filter((message) => Date.now() - message.timestamp < 6000) // 1 minute
      })),
}))

//end of error and success messages

//state managing data changes
export interface DataChange {
    loanChange : number;
    borrowerChange : number;
    notificationChange : number;
    setLoanChange : () => void;
    setBorrowerChange : () => void;
    setNotificationChange : () => void;
}

export const useDataChange = create<DataChange> ((set) => ({
    loanChange : 0,
    borrowerChange : 0,
    notificationChange : 0,
    setLoanChange : () => set((state) => ({loanChange : state.loanChange + 1})),
    setBorrowerChange : () => set((state) => ({borrowerChange : state.borrowerChange + 1})),
    setNotificationChange : () => set((state) => ({notificationChange : state.notificationChange + 1}))
}))
 