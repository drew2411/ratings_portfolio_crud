import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrpcModule } from '@server/trpc/trpc.module';
import { PrismaModule } from '@server/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { PortfolioModule } from '@server/portfolio/portfolio.module';
import { RatingsModule } from '@server/ratings/ratings.module';
// import { FreelancerModule } from '@server/freelancer/freelancer.module';
// import { ClientModule } from '@server/client/client.module';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TrpcModule, 
    PrismaModule,
    PrismaModule,
    RatingsModule,
    PortfolioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}