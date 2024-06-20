import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { PrismaModule } from 'apps/backend/src/prisma/prisma.module';
import { TrpcModule } from '@server/trpc/trpc.module';
import { ProjectRouter } from './project.router';
import { TrpcService } from '@server/trpc/trpc.service';

@Module({
  imports: [PrismaModule,ProjectModule,TrpcModule],
  providers: [ProjectService, ProjectRouter, TrpcService],
  exports: [ProjectService], 
})
export class ProjectModule {

}


