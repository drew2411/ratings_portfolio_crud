import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PortfolioCountOrderByAggregateInputObjectSchema } from './PortfolioCountOrderByAggregateInput.schema';
import { PortfolioAvgOrderByAggregateInputObjectSchema } from './PortfolioAvgOrderByAggregateInput.schema';
import { PortfolioMaxOrderByAggregateInputObjectSchema } from './PortfolioMaxOrderByAggregateInput.schema';
import { PortfolioMinOrderByAggregateInputObjectSchema } from './PortfolioMinOrderByAggregateInput.schema';
import { PortfolioSumOrderByAggregateInputObjectSchema } from './PortfolioSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PortfolioOrderByWithAggregationInput> = z
  .object({
    portfolioID: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    usefulLinks: z.lazy(() => SortOrderSchema).optional(),
    yearsOfExperience: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PortfolioCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => PortfolioAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PortfolioMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PortfolioMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => PortfolioSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PortfolioOrderByWithAggregationInputObjectSchema = Schema;
