import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FreelancerCountOrderByAggregateInputObjectSchema } from './FreelancerCountOrderByAggregateInput.schema';
import { FreelancerAvgOrderByAggregateInputObjectSchema } from './FreelancerAvgOrderByAggregateInput.schema';
import { FreelancerMaxOrderByAggregateInputObjectSchema } from './FreelancerMaxOrderByAggregateInput.schema';
import { FreelancerMinOrderByAggregateInputObjectSchema } from './FreelancerMinOrderByAggregateInput.schema';
import { FreelancerSumOrderByAggregateInputObjectSchema } from './FreelancerSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerOrderByWithAggregationInput> = z
  .object({
    freelancerID: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    userName: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    phoneNumber: z.lazy(() => SortOrderSchema).optional(),
    bio: z.lazy(() => SortOrderSchema).optional(),
    basedIn: z.lazy(() => SortOrderSchema).optional(),
    totalEarnings: z.lazy(() => SortOrderSchema).optional(),
    avgRating: z.lazy(() => SortOrderSchema).optional(),
    workPreferences: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => FreelancerCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => FreelancerAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => FreelancerMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => FreelancerMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => FreelancerSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const FreelancerOrderByWithAggregationInputObjectSchema = Schema;
