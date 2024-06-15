import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PortfolioCountAggregateInputType> = z
  .object({
    portfolioID: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    usefulLinks: z.literal(true).optional(),
    yearsOfExperience: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const PortfolioCountAggregateInputObjectSchema = Schema;
