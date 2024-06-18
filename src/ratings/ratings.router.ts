import { INestApplication, Injectable } from "@nestjs/common";
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import { TrpcService } from "@server/trpc/trpc.service";
import { RatingsService } from "./ratings.service";

import { RatingsCreateInputObjectSchema } from "D:/XLANCR/XLANCR/apps/backend/prisma/zod-schema/RatingsCreateInput.schema";
import { RatingsWhereUniqueInputObjectSchema } from "D:/XLANCR/XLANCR/apps/backend/prisma/zod-schema/RatingsWhereUniqueInput.schema";
import { RatingsSelectObjectSchema } from "D:/XLANCR/XLANCR/apps/backend/prisma/zod-schema/RatingsSelect.schema";
import { RatingsUpdateInputObjectSchema } from "D:/XLANCR/XLANCR/apps/backend/prisma/zod-schema/RatingsUpdateInput.schema";

@Injectable()
export class RatingsRouter {
    constructor(
        private readonly trpc: TrpcService,
        private readonly rService: RatingsService,
    ) {}

    ratingsRouter = this.trpc.router({
        create: this.trpc.procedure
            .input(RatingsCreateInputObjectSchema)
            .mutation(async ({ input, ctx }) => {
                return this.rService.createRatings(input);
            }),
        getMany: this.trpc.procedure
            .input(z.object({ page: z.number(), limit: z.number() }))
            .query(async ({ input, ctx }) => {
                return this.rService.findManyRatings(input.page, input.limit);
            }),
        getOne: this.trpc.procedure
            .input(z.object({ where: RatingsWhereUniqueInputObjectSchema, select: RatingsSelectObjectSchema.optional() }))
            .query(async ({ input, ctx }) => {
                return this.rService.findUniqueRatings(input.where, input.select);
            }),
        update: this.trpc.procedure
            .input(z.object({ where: RatingsWhereUniqueInputObjectSchema, data: RatingsUpdateInputObjectSchema, select: RatingsSelectObjectSchema.optional() }))
            .mutation(async ({ input, ctx }) => {
                return this.rService.updateRatings(input.where, input.data, input.select);
            }),
        delete: this.trpc.procedure
            .input(RatingsWhereUniqueInputObjectSchema)
            .mutation(async ({ input, ctx }) => {
                return this.rService.deleteRatings(input);
            })
    })

    async applyMiddleware(app: INestApplication) {
        app.use('/ratings', trpcExpress.createExpressMiddleware({ router: this.ratingsRouter }))
    }
}

export type RatingsRouterType = RatingsRouter['ratingsRouter'];
