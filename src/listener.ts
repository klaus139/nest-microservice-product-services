import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
//import { Options } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://snubpguc:eQy2I7eH0FqbPKprYg5sLY7vV1JV35B_@moose.rmq.cloudamqp.com/snubpguc',
        ],
        queue: 'main_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  app.listen();
  console.log('Microservice is listening...');
}
bootstrap();
