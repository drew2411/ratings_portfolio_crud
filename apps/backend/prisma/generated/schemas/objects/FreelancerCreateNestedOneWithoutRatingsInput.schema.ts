import { z } from 'zod';
import { FreelancerCreateWithoutRatingsInputObjectSchema } from './FreelancerCreateWithoutRatingsInput.schema';
import { FreelancerUncheckedCreateWithoutRatingsInputObjectSchema } from './FreelancerUncheckedCreateWithoutRatingsInput.schema';
import { FreelancerCreateOrConnectWithoutRatingsInputObjectSchema } from './FreelancerCreateOrConnectWithoutRatingsInput.schema';
import { FreelancerWhereUniqueInputObjectSchema } from './FreelancerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerCreateNestedOneWithoutRatingsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => FreelancerCreateWithoutRatingsInputObjectSchema),
        z.lazy(() => FreelancerUncheckedCreateWithoutRatingsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => FreelancerCreateOrConnectWithoutRatingsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => FreelancerWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const FreelancerCreateNestedOneWithoutRatingsInputObjectSchema = Schema;
