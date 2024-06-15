import { z } from 'zod';
import { ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutProjectInputObjectSchema } from './ClientCreateWithoutProjectInput.schema';
import { ClientUncheckedCreateWithoutProjectInputObjectSchema } from './ClientUncheckedCreateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientCreateOrConnectWithoutProjectInput> = z
  .object({
    where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ClientCreateWithoutProjectInputObjectSchema),
      z.lazy(() => ClientUncheckedCreateWithoutProjectInputObjectSchema),
    ]),
  })
  .strict();

export const ClientCreateOrConnectWithoutProjectInputObjectSchema = Schema;
