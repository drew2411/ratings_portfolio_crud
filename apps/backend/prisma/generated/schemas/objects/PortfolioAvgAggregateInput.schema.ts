import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PortfolioAvgAggregateInputType> = z
  .object({
    yearsOfExperience: z.literal(true).optional(),
  })
  .strict();

export const PortfolioAvgAggregateInputObjectSchema = Schema;
