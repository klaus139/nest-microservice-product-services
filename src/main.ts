import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { Options } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhost:4200',
  });
  await app.listen(8001);
}
bootstrap();
