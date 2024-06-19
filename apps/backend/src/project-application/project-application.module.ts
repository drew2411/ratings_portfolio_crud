import { Module } from '@nestjs/common';
import { ProjectApplicationController } from './project-application.controller';
import { ProjectApplicationService } from './project-application.service';
import { PrismaModule } from 'apps/backend/src/prisma/prisma.module';

@Module({
  imports : [PrismaModule,ProjectApplicationModule],
  controllers: [ProjectApplicationController],
  providers: [ProjectApplicationService],
  exports :[ProjectApplicationService]
})
export class ProjectApplicationModule {}