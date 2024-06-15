import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerAvgOrderByAggregateInput> = z
  .object({
    phoneNumber: z.lazy(() => SortOrderSchema).optional(),
    totalEarnings: z.lazy(() => SortOrderSchema).optional(),
    avgRating: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const FreelancerAvgOrderByAggregateInputObjectSchema = Schema;
