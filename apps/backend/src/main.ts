/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { TrpcRouter } from './trpc/trpc.router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 4000;
  app.enableCors();

  // ADDING TRPC
  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);
  
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}`
  );
}

bootstrap();
