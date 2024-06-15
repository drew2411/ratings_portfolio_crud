import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsAvgOrderByAggregateInput> = z
  .object({
    proposedAmount: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProjectApplicationsAvgOrderByAggregateInputObjectSchema = Schema;
