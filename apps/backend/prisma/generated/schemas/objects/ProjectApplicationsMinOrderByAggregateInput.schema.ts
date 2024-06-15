import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsMinOrderByAggregateInput> = z
  .object({
    projectApplicationID: z.lazy(() => SortOrderSchema).optional(),
    submittedAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    applicantID: z.lazy(() => SortOrderSchema).optional(),
    projectProjectID: z.lazy(() => SortOrderSchema).optional(),
    proposedAmount: z.lazy(() => SortOrderSchema).optional(),
    addtionalNotes: z.lazy(() => SortOrderSchema).optional(),
    Status: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProjectApplicationsMinOrderByAggregateInputObjectSchema = Schema;
