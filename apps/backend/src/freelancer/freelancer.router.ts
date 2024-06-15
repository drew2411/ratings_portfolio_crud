import { INestApplication, Injectable } from "@nestjs/common";

import {z} from 'zod';

import * as trpcExpress from '@trpc/server/adapters/express'
import { TrpcService } from "@server/trpc/trpc.service";
import { FreelancerService } from "./freelancer.service";
import { Prisma } from "@prisma/client";

import { FreelancerCreateInputObjectSchema } from "../../prisma/generated/schemas/objects/FreelancerCreateInput.schema"


@Injectable()
export class TrpcRouter {
    constructor(
      private readonly trpc: TrpcService,
      private readonly fService: FreelancerService,
    ) {}

    freelancerRouter = this.trpc.router({
      createFreelancer: this.trpc.procedure.input(FreelancerCreateInputObjectSchema).mutation(async ({ input, ctx }) => {
        return this.fService.createFreelancer(input);
      }),
    })

    async applyMiddleware(app: INestApplication) {
        app.use('/freelancer', trpcExpress.createExpressMiddleware({router: this.freelancerRouter}))
    }
}
