import { z } from 'zod';
import { ClientCreateWithoutRatingsInputObjectSchema } from './ClientCreateWithoutRatingsInput.schema';
import { ClientUncheckedCreateWithoutRatingsInputObjectSchema } from './ClientUncheckedCreateWithoutRatingsInput.schema';
import { ClientCreateOrConnectWithoutRatingsInputObjectSchema } from './ClientCreateOrConnectWithoutRatingsInput.schema';
import { ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientCreateNestedOneWithoutRatingsInput> = z
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
    connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ClientCreateNestedOneWithoutRatingsInputObjectSchema = Schema;
