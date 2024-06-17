import { INestApplication, Injectable } from "@nestjs/common";

import {z} from 'zod';

import * as trpcExpress from '@trpc/server/adapters/express'
import { TrpcService } from "@server/trpc/trpc.service";
import { FreelancerService } from "./freelancer.service";

import { FreelancerCreateInputObjectSchema} from "apps/backend/prisma/manual-zod-schemas/FreelancerCreateInput.schema"
import { FreelancerWhereUniqueInputObjectSchema } from "apps/backend/prisma/manual-zod-schemas/FreelancerWhereUniqueInput.schema";
import { FreelancerSelectObjectSchema } from "apps/backend/prisma/manual-zod-schemas/FreelancerSelect.schema"

@Injectable()
export class FreelancerRouter {
    constructor(
      private readonly trpc: TrpcService,
      private readonly fService: FreelancerService,
    ) {}

    freelancerRouter = this.trpc.router({
      createFreelancer: this.trpc.procedure
                        .input(FreelancerCreateInputObjectSchema)
                        .mutation(async ({ input, ctx }) => {
                          return this.fService.createFreelancer(input);
                        }),
      getFreelancers: this.trpc.procedure
                      .input(z.object({page: z.number(), limit: z.number()}))
                      .query(async ({input, ctx}) => {
                        return this.fService.findManyFreelancers(input.page, input.limit);
                      }),
      getOneFreelancer: this.trpc.procedure
                        .input(z.object({where: FreelancerWhereUniqueInputObjectSchema, select: FreelancerSelectObjectSchema}))
                        .query(async ({input, ctx}) => {
                          return this.fService.findUniqueFreelancer(input.where, input.select);
                        }),
      
    })

    async applyMiddleware(app: INestApplication) {
        app.use('/freelancer', trpcExpress.createExpressMiddleware({router: this.freelancerRouter}))
    }
}

export type FreelancerRouterType = FreelancerRouter['freelancerRouter'];
