import { Module } from '@nestjs/common';
import { ProjectSelectionService } from './project-selection.service';
import { PrismaModule } from 'apps/backend/src/prisma/prisma.module';
import { ProjectSelectionRouter } from './project-selection.router';
import { TrpcModule } from '@server/trpc/trpc.module';
import { TrpcService } from '@server/trpc/trpc.service';

@Module({
  imports : [PrismaModule,ProjectSelectionModule,TrpcModule],
  providers: [ProjectSelectionService, ProjectSelectionRouter, TrpcService],
  exports: [ProjectSelectionService], 
})
export class ProjectSelectionModule {}



