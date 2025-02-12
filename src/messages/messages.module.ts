import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesServices } from './messages.service';
import { MessagesRepositoy } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesServices, MessagesRepositoy]
})
export class MessagesModule {}
