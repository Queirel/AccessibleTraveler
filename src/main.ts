import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import * as fs from 'fs';
// import path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // httpsOptions,
  });

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  const configService = app.get(ConfigService);
  app.enableCors();
  await app.listen(process.env.PORT);
  console.log(`http://localhost:${process.env.PORT}`);
  console.log(configService.get('PORT'));
}
bootstrap();
