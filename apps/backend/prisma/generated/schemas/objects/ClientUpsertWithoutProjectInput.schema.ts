import { z } from 'zod';
import { ClientUpdateWithoutProjectInputObjectSchema } from './ClientUpdateWithoutProjectInput.schema';
import { ClientUncheckedUpdateWithoutProjectInputObjectSchema } from './ClientUncheckedUpdateWithoutProjectInput.schema';
import { ClientCreateWithoutProjectInputObjectSchema } from './ClientCreateWithoutProjectInput.schema';
import { ClientUncheckedCreateWithoutProjectInputObjectSchema } from './ClientUncheckedCreateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientUpsertWithoutProjectInput> = z
  .object({
    update: z.union([
      z.lazy(() => ClientUpdateWithoutProjectInputObjectSchema),
      z.lazy(() => ClientUncheckedUpdateWithoutProjectInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ClientCreateWithoutProjectInputObjectSchema),
      z.lazy(() => ClientUncheckedCreateWithoutProjectInputObjectSchema),
    ]),
  })
  .strict();

export const ClientUpsertWithoutProjectInputObjectSchema = Schema;
