import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectAvgOrderByAggregateInput> = z
  .object({
    proposedPrice: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProjectAvgOrderByAggregateInputObjectSchema = Schema;
