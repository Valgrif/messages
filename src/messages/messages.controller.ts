import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { MessagesServices } from './messages.service';
@Controller('messages')
export class MessagesController {
    messagesService: MessagesServices;
    constructor(){
        // No realizar en APPs reales, se usa injeccion de dependencias
        this.messagesService = new MessagesServices();
    }
    @Get()
    listMessages(){
        return this.messagesService.findAll();
    }
    @Post()
    createMessage(@Body() body: createMessageDto){
        return this.messagesService.create(body.content);
    }
    @Get('/:id')
    async getMessage(@Param('id') id: string){
        const message = await this.messagesService.findOne(id);
        if(!message){
            throw new NotFoundException('message not found');
        }

        return message;
    }
}
