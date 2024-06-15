import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectMinOrderByAggregateInput> = z
  .object({
    projectID: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    projectName: z.lazy(() => SortOrderSchema).optional(),
    projectDescription: z.lazy(() => SortOrderSchema).optional(),
    clientID: z.lazy(() => SortOrderSchema).optional(),
    isHiring: z.lazy(() => SortOrderSchema).optional(),
    startDate: z.lazy(() => SortOrderSchema).optional(),
    endDate: z.lazy(() => SortOrderSchema).optional(),
    paymentStatus: z.lazy(() => SortOrderSchema).optional(),
    industry: z.lazy(() => SortOrderSchema).optional(),
    proposedPrice: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProjectMinOrderByAggregateInputObjectSchema = Schema;
