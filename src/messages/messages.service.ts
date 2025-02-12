import { MessagesRepositoy } from "./messages.repository";
export class MessagesServices {
    messagesRepo: MessagesRepositoy;
    constructor(){
        // Servicio para crear nuestras dependencias
        // Esto no se hace en APPS reales, es de caracter formativo
        this.messagesRepo = new MessagesRepositoy();
    }

    async findOne(id: string){
        return this.messagesRepo.findOne(id);
    }

    findAll(){
        return this.messagesRepo.findAll();
    }

    create(content: string){
        return this.messagesRepo.create(content);
    }
}