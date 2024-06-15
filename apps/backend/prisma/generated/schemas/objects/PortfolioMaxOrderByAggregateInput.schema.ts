import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PortfolioMaxOrderByAggregateInput> = z
  .object({
    portfolioID: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PortfolioMaxOrderByAggregateInputObjectSchema = Schema;
