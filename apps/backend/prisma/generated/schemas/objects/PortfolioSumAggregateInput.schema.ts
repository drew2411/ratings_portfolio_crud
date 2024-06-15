import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PortfolioSumAggregateInputType> = z
  .object({
    yearsOfExperience: z.literal(true).optional(),
  })
  .strict();

export const PortfolioSumAggregateInputObjectSchema = Schema;
