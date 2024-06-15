import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProjectCountOrderByAggregateInputObjectSchema } from './ProjectCountOrderByAggregateInput.schema';
import { ProjectAvgOrderByAggregateInputObjectSchema } from './ProjectAvgOrderByAggregateInput.schema';
import { ProjectMaxOrderByAggregateInputObjectSchema } from './ProjectMaxOrderByAggregateInput.schema';
import { ProjectMinOrderByAggregateInputObjectSchema } from './ProjectMinOrderByAggregateInput.schema';
import { ProjectSumOrderByAggregateInputObjectSchema } from './ProjectSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectOrderByWithAggregationInput> = z
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
    _count: z
      .lazy(() => ProjectCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ProjectAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ProjectMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ProjectMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ProjectSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ProjectOrderByWithAggregationInputObjectSchema = Schema;
