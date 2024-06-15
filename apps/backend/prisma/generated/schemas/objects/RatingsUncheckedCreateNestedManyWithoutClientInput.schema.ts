import { z } from 'zod';
import { RatingsCreateWithoutClientInputObjectSchema } from './RatingsCreateWithoutClientInput.schema';
import { RatingsUncheckedCreateWithoutClientInputObjectSchema } from './RatingsUncheckedCreateWithoutClientInput.schema';
import { RatingsCreateOrConnectWithoutClientInputObjectSchema } from './RatingsCreateOrConnectWithoutClientInput.schema';
import { RatingsCreateManyClientInputEnvelopeObjectSchema } from './RatingsCreateManyClientInputEnvelope.schema';
import { RatingsWhereUniqueInputObjectSchema } from './RatingsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsUncheckedCreateNestedManyWithoutClientInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RatingsCreateWithoutClientInputObjectSchema),
          z.lazy(() => RatingsCreateWithoutClientInputObjectSchema).array(),
          z.lazy(() => RatingsUncheckedCreateWithoutClientInputObjectSchema),
          z
            .lazy(() => RatingsUncheckedCreateWithoutClientInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RatingsCreateOrConnectWithoutClientInputObjectSchema),
          z
            .lazy(() => RatingsCreateOrConnectWithoutClientInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RatingsCreateManyClientInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RatingsWhereUniqueInputObjectSchema),
          z.lazy(() => RatingsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RatingsUncheckedCreateNestedManyWithoutClientInputObjectSchema =
  Schema;
