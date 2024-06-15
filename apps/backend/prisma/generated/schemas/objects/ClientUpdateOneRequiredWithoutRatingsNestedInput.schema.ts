import { z } from 'zod';
import { ClientCreateWithoutRatingsInputObjectSchema } from './ClientCreateWithoutRatingsInput.schema';
import { ClientUncheckedCreateWithoutRatingsInputObjectSchema } from './ClientUncheckedCreateWithoutRatingsInput.schema';
import { ClientCreateOrConnectWithoutRatingsInputObjectSchema } from './ClientCreateOrConnectWithoutRatingsInput.schema';
import { ClientUpsertWithoutRatingsInputObjectSchema } from './ClientUpsertWithoutRatingsInput.schema';
import { ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateWithoutRatingsInputObjectSchema } from './ClientUpdateWithoutRatingsInput.schema';
import { ClientUncheckedUpdateWithoutRatingsInputObjectSchema } from './ClientUncheckedUpdateWithoutRatingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientUpdateOneRequiredWithoutRatingsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ClientCreateWithoutRatingsInputObjectSchema),
          z.lazy(() => ClientUncheckedCreateWithoutRatingsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ClientCreateOrConnectWithoutRatingsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ClientUpsertWithoutRatingsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ClientUpdateWithoutRatingsInputObjectSchema),
          z.lazy(() => ClientUncheckedUpdateWithoutRatingsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ClientUpdateOneRequiredWithoutRatingsNestedInputObjectSchema =
  Schema;
