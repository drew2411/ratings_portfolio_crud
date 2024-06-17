import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrpcModule } from '@server/trpc/trpc.module';
import { PrismaModule } from '@server/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { FreelancerModule } from '@server/freelancer/freelancer.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TrpcModule, 
    PrismaModule,
    FreelancerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
