import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsSumOrderByAggregateInput> = z
  .object({
    Rating: z.lazy(() => SortOrderSchema).optional(),
    likes: z.lazy(() => SortOrderSchema).optional(),
    clientSatisfactionScore: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RatingsSumOrderByAggregateInputObjectSchema = Schema;
