import { z } from 'zod';
import { ClientCreateWithoutProjectInputObjectSchema } from './ClientCreateWithoutProjectInput.schema';
import { ClientUncheckedCreateWithoutProjectInputObjectSchema } from './ClientUncheckedCreateWithoutProjectInput.schema';
import { ClientCreateOrConnectWithoutProjectInputObjectSchema } from './ClientCreateOrConnectWithoutProjectInput.schema';
import { ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientCreateNestedOneWithoutProjectInput> = z
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
    connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ClientCreateNestedOneWithoutProjectInputObjectSchema = Schema;
