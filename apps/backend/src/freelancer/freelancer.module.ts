import { Module } from '@nestjs/common';
import { TrpcModule } from '@server/trpc/trpc.module';
import { PrismaModule } from '@server/prisma/prisma.module';
import { FreelancerService } from './freelancer.service';
import { FreelancerController } from './freelancer.controller';

@Module({
  imports: [
    AppModule,
    TrpcModule, 
    PrismaModule],
  controllers: [FreelancerController],
  providers: [FreelancerService],
})
export class AppModule {}