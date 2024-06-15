import { z } from 'zod';
import { FreelancerUpdateWithoutRatingsInputObjectSchema } from './FreelancerUpdateWithoutRatingsInput.schema';
import { FreelancerUncheckedUpdateWithoutRatingsInputObjectSchema } from './FreelancerUncheckedUpdateWithoutRatingsInput.schema';
import { FreelancerCreateWithoutRatingsInputObjectSchema } from './FreelancerCreateWithoutRatingsInput.schema';
import { FreelancerUncheckedCreateWithoutRatingsInputObjectSchema } from './FreelancerUncheckedCreateWithoutRatingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerUpsertWithoutRatingsInput> = z
  .object({
    update: z.union([
      z.lazy(() => FreelancerUpdateWithoutRatingsInputObjectSchema),
      z.lazy(() => FreelancerUncheckedUpdateWithoutRatingsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => FreelancerCreateWithoutRatingsInputObjectSchema),
      z.lazy(() => FreelancerUncheckedCreateWithoutRatingsInputObjectSchema),
    ]),
  })
  .strict();

export const FreelancerUpsertWithoutRatingsInputObjectSchema = Schema;
