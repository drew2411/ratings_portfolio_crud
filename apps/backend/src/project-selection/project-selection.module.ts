import { Module } from '@nestjs/common';
import { ProjectSelectionController } from './project-selection.controller';
import { ProjectSelectionService } from './project-selection.service';
import { PrismaModule } from 'apps/backend/src/prisma/prisma.module';

@Module({
  imports : [PrismaModule,ProjectSelectionModule],
  controllers: [ProjectSelectionController],
  providers: [ProjectSelectionService],
  exports :[ProjectSelectionService]
})
export class ProjectSelectionModule {}
