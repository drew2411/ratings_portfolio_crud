import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProjectApplicationsCountOrderByAggregateInputObjectSchema } from './ProjectApplicationsCountOrderByAggregateInput.schema';
import { ProjectApplicationsAvgOrderByAggregateInputObjectSchema } from './ProjectApplicationsAvgOrderByAggregateInput.schema';
import { ProjectApplicationsMaxOrderByAggregateInputObjectSchema } from './ProjectApplicationsMaxOrderByAggregateInput.schema';
import { ProjectApplicationsMinOrderByAggregateInputObjectSchema } from './ProjectApplicationsMinOrderByAggregateInput.schema';
import { ProjectApplicationsSumOrderByAggregateInputObjectSchema } from './ProjectApplicationsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsOrderByWithAggregationInput> =
  z
    .object({
      projectApplicationID: z.lazy(() => SortOrderSchema).optional(),
      submittedAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      applicantID: z.lazy(() => SortOrderSchema).optional(),
      projectProjectID: z.lazy(() => SortOrderSchema).optional(),
      proposedAmount: z.lazy(() => SortOrderSchema).optional(),
      addtionalNotes: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputObjectSchema),
        ])
        .optional(),
      Status: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => ProjectApplicationsCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => ProjectApplicationsAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => ProjectApplicationsMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => ProjectApplicationsMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => ProjectApplicationsSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const ProjectApplicationsOrderByWithAggregationInputObjectSchema =
  Schema;
