import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  //await app.listen(3000, '192.168.10.2' || 'localhost'); // VIDA DE MI VIDA
  await app.listen(3000, '192.168.101.74' || 'localhost'); // LUIS HERRERA
}
bootstrap();
