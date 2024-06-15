import { z } from 'zod';
import { ClientUpdateWithoutRatingsInputObjectSchema } from './ClientUpdateWithoutRatingsInput.schema';
import { ClientUncheckedUpdateWithoutRatingsInputObjectSchema } from './ClientUncheckedUpdateWithoutRatingsInput.schema';
import { ClientCreateWithoutRatingsInputObjectSchema } from './ClientCreateWithoutRatingsInput.schema';
import { ClientUncheckedCreateWithoutRatingsInputObjectSchema } from './ClientUncheckedCreateWithoutRatingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientUpsertWithoutRatingsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ClientUpdateWithoutRatingsInputObjectSchema),
      z.lazy(() => ClientUncheckedUpdateWithoutRatingsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ClientCreateWithoutRatingsInputObjectSchema),
      z.lazy(() => ClientUncheckedCreateWithoutRatingsInputObjectSchema),
    ]),
  })
  .strict();

export const ClientUpsertWithoutRatingsInputObjectSchema = Schema;
