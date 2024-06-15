import { z } from 'zod';
import { ClientCreateWithoutProjectInputObjectSchema } from './ClientCreateWithoutProjectInput.schema';
import { ClientUncheckedCreateWithoutProjectInputObjectSchema } from './ClientUncheckedCreateWithoutProjectInput.schema';
import { ClientCreateOrConnectWithoutProjectInputObjectSchema } from './ClientCreateOrConnectWithoutProjectInput.schema';
import { ClientUpsertWithoutProjectInputObjectSchema } from './ClientUpsertWithoutProjectInput.schema';
import { ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateWithoutProjectInputObjectSchema } from './ClientUpdateWithoutProjectInput.schema';
import { ClientUncheckedUpdateWithoutProjectInputObjectSchema } from './ClientUncheckedUpdateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientUpdateOneRequiredWithoutProjectNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ClientCreateWithoutProjectInputObjectSchema),
          z.lazy(() => ClientUncheckedCreateWithoutProjectInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ClientCreateOrConnectWithoutProjectInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ClientUpsertWithoutProjectInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ClientUpdateWithoutProjectInputObjectSchema),
          z.lazy(() => ClientUncheckedUpdateWithoutProjectInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ClientUpdateOneRequiredWithoutProjectNestedInputObjectSchema =
  Schema;
