import { z } from 'zod';
import { FreelancerCreateWithoutRatingsInputObjectSchema } from './FreelancerCreateWithoutRatingsInput.schema';
import { FreelancerUncheckedCreateWithoutRatingsInputObjectSchema } from './FreelancerUncheckedCreateWithoutRatingsInput.schema';
import { FreelancerCreateOrConnectWithoutRatingsInputObjectSchema } from './FreelancerCreateOrConnectWithoutRatingsInput.schema';
import { FreelancerUpsertWithoutRatingsInputObjectSchema } from './FreelancerUpsertWithoutRatingsInput.schema';
import { FreelancerWhereUniqueInputObjectSchema } from './FreelancerWhereUniqueInput.schema';
import { FreelancerUpdateWithoutRatingsInputObjectSchema } from './FreelancerUpdateWithoutRatingsInput.schema';
import { FreelancerUncheckedUpdateWithoutRatingsInputObjectSchema } from './FreelancerUncheckedUpdateWithoutRatingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerUpdateOneRequiredWithoutRatingsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FreelancerCreateWithoutRatingsInputObjectSchema),
          z.lazy(
            () => FreelancerUncheckedCreateWithoutRatingsInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => FreelancerCreateOrConnectWithoutRatingsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => FreelancerUpsertWithoutRatingsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => FreelancerWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => FreelancerUpdateWithoutRatingsInputObjectSchema),
          z.lazy(
            () => FreelancerUncheckedUpdateWithoutRatingsInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const FreelancerUpdateOneRequiredWithoutRatingsNestedInputObjectSchema =
  Schema;
