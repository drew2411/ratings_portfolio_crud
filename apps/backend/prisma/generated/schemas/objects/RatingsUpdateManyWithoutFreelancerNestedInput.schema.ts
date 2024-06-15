import { z } from 'zod';
import { RatingsCreateWithoutFreelancerInputObjectSchema } from './RatingsCreateWithoutFreelancerInput.schema';
import { RatingsUncheckedCreateWithoutFreelancerInputObjectSchema } from './RatingsUncheckedCreateWithoutFreelancerInput.schema';
import { RatingsCreateOrConnectWithoutFreelancerInputObjectSchema } from './RatingsCreateOrConnectWithoutFreelancerInput.schema';
import { RatingsUpsertWithWhereUniqueWithoutFreelancerInputObjectSchema } from './RatingsUpsertWithWhereUniqueWithoutFreelancerInput.schema';
import { RatingsCreateManyFreelancerInputEnvelopeObjectSchema } from './RatingsCreateManyFreelancerInputEnvelope.schema';
import { RatingsWhereUniqueInputObjectSchema } from './RatingsWhereUniqueInput.schema';
import { RatingsUpdateWithWhereUniqueWithoutFreelancerInputObjectSchema } from './RatingsUpdateWithWhereUniqueWithoutFreelancerInput.schema';
import { RatingsUpdateManyWithWhereWithoutFreelancerInputObjectSchema } from './RatingsUpdateManyWithWhereWithoutFreelancerInput.schema';
import { RatingsScalarWhereInputObjectSchema } from './RatingsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsUpdateManyWithoutFreelancerNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => RatingsUpsertWithWhereUniqueWithoutFreelancerInputObjectSchema
          ),
          z
            .lazy(
              () =>
                RatingsUpsertWithWhereUniqueWithoutFreelancerInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RatingsCreateManyFreelancerInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => RatingsWhereUniqueInputObjectSchema),
          z.lazy(() => RatingsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => RatingsWhereUniqueInputObjectSchema),
          z.lazy(() => RatingsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => RatingsWhereUniqueInputObjectSchema),
          z.lazy(() => RatingsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RatingsWhereUniqueInputObjectSchema),
          z.lazy(() => RatingsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => RatingsUpdateWithWhereUniqueWithoutFreelancerInputObjectSchema
          ),
          z
            .lazy(
              () =>
                RatingsUpdateWithWhereUniqueWithoutFreelancerInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => RatingsUpdateManyWithWhereWithoutFreelancerInputObjectSchema
          ),
          z
            .lazy(
              () => RatingsUpdateManyWithWhereWithoutFreelancerInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => RatingsScalarWhereInputObjectSchema),
          z.lazy(() => RatingsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RatingsUpdateManyWithoutFreelancerNestedInputObjectSchema = Schema;
