import { INestApplication, Injectable } from "@nestjs/common";
import { TrpcService } from "./trpc.service";
import {z} from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express'

@Injectable()
export class TrpcRouter {
    constructor(private readonly trpc: TrpcService) {}

    appRouter = this.trpc.router({
        hello: this.trpc.procedure
        .input(z.object({name:  z.string()}))
        .query(({ input }) => {
            return `I am ${input.name ? input.name : 'hello this'}`;
        })
    })

    async applyMiddleware(app: INestApplication) {
        app.use('/trpc', trpcExpress.createExpressMiddleware({router: this.appRouter}))
    }
}

export type AppRouter = TrpcRouter['appRouter'];