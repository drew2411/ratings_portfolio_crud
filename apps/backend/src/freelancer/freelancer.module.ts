import { Module } from '@nestjs/common';
import { TrpcModule } from '@server/trpc/trpc.module';
import { PrismaModule } from '@server/prisma/prisma.module';
import { FreelancerService } from './freelancer.service';
import { FreelancerRouter } from './freelancer.router';

@Module({
  imports: [
    AppModule,
    TrpcModule, 
    PrismaModule],
  providers: [FreelancerService],
  exports: [FreelancerRouter]
})
export class AppModule {}