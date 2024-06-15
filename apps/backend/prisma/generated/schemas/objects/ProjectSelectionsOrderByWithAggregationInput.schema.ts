import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProjectSelectionsCountOrderByAggregateInputObjectSchema } from './ProjectSelectionsCountOrderByAggregateInput.schema';
import { ProjectSelectionsAvgOrderByAggregateInputObjectSchema } from './ProjectSelectionsAvgOrderByAggregateInput.schema';
import { ProjectSelectionsMaxOrderByAggregateInputObjectSchema } from './ProjectSelectionsMaxOrderByAggregateInput.schema';
import { ProjectSelectionsMinOrderByAggregateInputObjectSchema } from './ProjectSelectionsMinOrderByAggregateInput.schema';
import { ProjectSelectionsSumOrderByAggregateInputObjectSchema } from './ProjectSelectionsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsOrderByWithAggregationInput> = z
  .object({
    projectSelectionID: z.lazy(() => SortOrderSchema).optional(),
    selecteAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    selectedFreelancerID: z.lazy(() => SortOrderSchema).optional(),
    wage: z.lazy(() => SortOrderSchema).optional(),
    projectProjectID: z.lazy(() => SortOrderSchema).optional(),
    OfferingDetails: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    projectRole: z.lazy(() => SortOrderSchema).optional(),
    endOfContract: z.lazy(() => SortOrderSchema).optional(),
    empType: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProjectSelectionsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ProjectSelectionsAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ProjectSelectionsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ProjectSelectionsMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ProjectSelectionsSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProjectSelectionsOrderByWithAggregationInputObjectSchema = Schema;
