import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PortfolioAvgOrderByAggregateInput> = z
  .object({
    yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PortfolioAvgOrderByAggregateInputObjectSchema = Schema;
