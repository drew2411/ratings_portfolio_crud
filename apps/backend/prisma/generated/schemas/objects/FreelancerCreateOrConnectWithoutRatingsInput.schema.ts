import { z } from 'zod';
import { FreelancerWhereUniqueInputObjectSchema } from './FreelancerWhereUniqueInput.schema';
import { FreelancerCreateWithoutRatingsInputObjectSchema } from './FreelancerCreateWithoutRatingsInput.schema';
import { FreelancerUncheckedCreateWithoutRatingsInputObjectSchema } from './FreelancerUncheckedCreateWithoutRatingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerCreateOrConnectWithoutRatingsInput> = z
  .object({
    where: z.lazy(() => FreelancerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => FreelancerCreateWithoutRatingsInputObjectSchema),
      z.lazy(() => FreelancerUncheckedCreateWithoutRatingsInputObjectSchema),
    ]),
  })
  .strict();

export const FreelancerCreateOrConnectWithoutRatingsInputObjectSchema = Schema;
