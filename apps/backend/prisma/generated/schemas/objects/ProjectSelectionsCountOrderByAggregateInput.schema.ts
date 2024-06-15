import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsCountOrderByAggregateInput> = z
  .object({
    projectSelectionID: z.lazy(() => SortOrderSchema).optional(),
    selecteAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    selectedFreelancerID: z.lazy(() => SortOrderSchema).optional(),
    wage: z.lazy(() => SortOrderSchema).optional(),
    projectProjectID: z.lazy(() => SortOrderSchema).optional(),
    OfferingDetails: z.lazy(() => SortOrderSchema).optional(),
    projectRole: z.lazy(() => SortOrderSchema).optional(),
    endOfContract: z.lazy(() => SortOrderSchema).optional(),
    empType: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProjectSelectionsCountOrderByAggregateInputObjectSchema = Schema;
