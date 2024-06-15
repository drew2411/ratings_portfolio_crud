import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RatingsCountOrderByAggregateInputObjectSchema } from './RatingsCountOrderByAggregateInput.schema';
import { RatingsAvgOrderByAggregateInputObjectSchema } from './RatingsAvgOrderByAggregateInput.schema';
import { RatingsMaxOrderByAggregateInputObjectSchema } from './RatingsMaxOrderByAggregateInput.schema';
import { RatingsMinOrderByAggregateInputObjectSchema } from './RatingsMinOrderByAggregateInput.schema';
import { RatingsSumOrderByAggregateInputObjectSchema } from './RatingsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsOrderByWithAggregationInput> = z
  .object({
    reviewID: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    clientClientID: z.lazy(() => SortOrderSchema).optional(),
    freelancerFreelancerID: z.lazy(() => SortOrderSchema).optional(),
    Rating: z.lazy(() => SortOrderSchema).optional(),
    feedBack: z.lazy(() => SortOrderSchema).optional(),
    likes: z.lazy(() => SortOrderSchema).optional(),
    clientSatisfactionScore: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RatingsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => RatingsAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => RatingsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RatingsMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => RatingsSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const RatingsOrderByWithAggregationInputObjectSchema = Schema;
