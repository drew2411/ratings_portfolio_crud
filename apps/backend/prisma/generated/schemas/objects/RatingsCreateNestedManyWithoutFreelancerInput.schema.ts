import { z } from 'zod';
import { RatingsCreateWithoutFreelancerInputObjectSchema } from './RatingsCreateWithoutFreelancerInput.schema';
import { RatingsUncheckedCreateWithoutFreelancerInputObjectSchema } from './RatingsUncheckedCreateWithoutFreelancerInput.schema';
import { RatingsCreateOrConnectWithoutFreelancerInputObjectSchema } from './RatingsCreateOrConnectWithoutFreelancerInput.schema';
import { RatingsCreateManyFreelancerInputEnvelopeObjectSchema } from './RatingsCreateManyFreelancerInputEnvelope.schema';
import { RatingsWhereUniqueInputObjectSchema } from './RatingsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsCreateNestedManyWithoutFreelancerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RatingsCreateWithoutFreelancerInputObjectSchema),
          z.lazy(() => RatingsCreateWithoutFreelancerInputObjectSchema).array(),
          z.lazy(
            () => RatingsUncheckedCreateWithoutFreelancerInputObjectSchema
          ),
          z
            .lazy(
              () => RatingsUncheckedCreateWithoutFreelancerInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => RatingsCreateOrConnectWithoutFreelancerInputObjectSchema
          ),
          z
            .lazy(
              () => RatingsCreateOrConnectWithoutFreelancerInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RatingsCreateManyFreelancerInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RatingsWhereUniqueInputObjectSchema),
          z.lazy(() => RatingsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RatingsCreateNestedManyWithoutFreelancerInputObjectSchema = Schema;
