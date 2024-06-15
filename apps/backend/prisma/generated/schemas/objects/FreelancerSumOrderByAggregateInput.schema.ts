import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerSumOrderByAggregateInput> = z
  .object({
    phoneNumber: z.lazy(() => SortOrderSchema).optional(),
    totalEarnings: z.lazy(() => SortOrderSchema).optional(),
    avgRating: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const FreelancerSumOrderByAggregateInputObjectSchema = Schema;
