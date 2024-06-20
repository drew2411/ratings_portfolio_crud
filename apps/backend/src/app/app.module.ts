import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrpcModule } from '@server/trpc/trpc.module';
import { PrismaModule } from '@server/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { FreelancerModule } from '@server/freelancer/freelancer.module';
import { ClientModule } from '@server/client/client.module';
import { ProjectModule } from '@server/project/project.module';
import { ProjectApplicationModule } from '@server/project-application/project-application.module';
import { ProjectSelectionModule } from '@server/project-selection/project-selection.module';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TrpcModule, 
    PrismaModule,
    FreelancerModule,
    ClientModule,
    ProjectModule,
    ProjectApplicationModule,
    ProjectSelectionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
