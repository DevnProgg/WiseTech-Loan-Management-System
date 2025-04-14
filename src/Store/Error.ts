import {create} from "zustand"

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