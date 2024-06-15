import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerAvgAggregateInputType> = z
  .object({
    phoneNumber: z.literal(true).optional(),
    totalEarnings: z.literal(true).optional(),
    avgRating: z.literal(true).optional(),
  })
  .strict();

export const FreelancerAvgAggregateInputObjectSchema = Schema;
