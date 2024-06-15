import { z } from 'zod';
import { ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutRatingsInputObjectSchema } from './ClientCreateWithoutRatingsInput.schema';
import { ClientUncheckedCreateWithoutRatingsInputObjectSchema } from './ClientUncheckedCreateWithoutRatingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientCreateOrConnectWithoutRatingsInput> = z
  .object({
    where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ClientCreateWithoutRatingsInputObjectSchema),
      z.lazy(() => ClientUncheckedCreateWithoutRatingsInputObjectSchema),
    ]),
  })
  .strict();

export const ClientCreateOrConnectWithoutRatingsInputObjectSchema = Schema;
