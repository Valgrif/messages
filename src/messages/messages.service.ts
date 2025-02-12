import { MessagesRepositoy } from "./messages.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesServices {
    constructor(public messagesRepo: MessagesRepositoy){
        
    }

    findOne(id: string){
        return this.messagesRepo.findOne(id);
    }

    findAll(){
        return this.messagesRepo.findAll();
    }

    create(content: string){
        return this.messagesRepo.create(content);
    }
}