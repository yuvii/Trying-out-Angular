export enum MessageType {
    TEXT = <any>'text'
}

export interface Chat {
    _id?: string;
    title?: string;
    picture?: string;
    lastMessage?: Message;
}

export interface Message {
    _ud?: string;
    chatId?: string;
    content?: string;
    createdAt?: Date;
    type?: MessageType
}