import * as trpc from '@trpc/server';
import { z } from 'zod';
import { Injectable } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { PortfolioService } from './portfolio.service';

@Injectable()
export class PortfolioRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly pService: PortfolioService
  ) {}

  portfolioRouter = this.trpc.router({
    create: this.trpc.procedure
      .input(FreelancerCreateInputObjectSchema)
      .mutation(async ({ input, ctx }) => {
        return this.fService.createFreelancer(input);
      }),
    getMany: this.trpc.procedure
      .input(z.object({ page: z.number(), limit: z.number() }))
      .query(async ({ input, ctx }) => {
        return this.fService.findManyFreelancers(input.page, input.limit);
      }),
    getOne: this.trpc.procedure
      .input(
        z.object({
          where: FreelancerWhereUniqueInputObjectSchema,
          select: FreelancerSelectObjectSchema.optional(),
        })
      )
      .query(async ({ input, ctx }) => {
        return this.fService.findUniqueFreelancer(input.where, input.select);
      }),
    update: this.trpc.procedure
      .input(
        z.object({
          where: FreelancerWhereUniqueInputObjectSchema,
          data: FreelancerUpdateInputObjectSchema,
          select: FreelancerSelectObjectSchema.optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        return this.fService.updateFreelancer(
          input.where,
          input.data,
          input.select
        );
      }),

    delete: this.trpc.procedure
      .input(FreelancerWhereUniqueInputObjectSchema)
      .mutation(async ({ input, ctx }) => {
        return this.fService.deleteFreelancer(input);
      }),
  });
  async applyMiddleware(app: INestApplication) {
    app.use(
      '/freelancer',
      trpcExpress.createExpressMiddleware({ router: this.freelancerRouter })
    );
  }
}

export type PortfolioRouterType = PortfolioRouter['portfolioRouter'];
