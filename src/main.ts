import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(
    //Para validar solicitudes entrantes
    new ValidationPipe(
      
    ) 
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
