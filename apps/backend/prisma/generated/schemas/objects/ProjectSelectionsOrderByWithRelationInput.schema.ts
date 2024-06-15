import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FreelancerOrderByWithRelationInputObjectSchema } from './FreelancerOrderByWithRelationInput.schema';
import { ProjectOrderByWithRelationInputObjectSchema } from './ProjectOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsOrderByWithRelationInput> = z
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
    selectedFreelancer: z
      .lazy(() => FreelancerOrderByWithRelationInputObjectSchema)
      .optional(),
    project: z
      .lazy(() => ProjectOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProjectSelectionsOrderByWithRelationInputObjectSchema = Schema;
