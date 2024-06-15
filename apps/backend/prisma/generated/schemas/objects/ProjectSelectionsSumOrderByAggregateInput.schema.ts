import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsSumOrderByAggregateInput> = z
  .object({
    wage: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProjectSelectionsSumOrderByAggregateInputObjectSchema = Schema;
