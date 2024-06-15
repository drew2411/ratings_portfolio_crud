import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FreelancerOrderByWithRelationInputObjectSchema } from './FreelancerOrderByWithRelationInput.schema';
import { ProjectOrderByWithRelationInputObjectSchema } from './ProjectOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsOrderByWithRelationInput> = z
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
    applicant: z
      .lazy(() => FreelancerOrderByWithRelationInputObjectSchema)
      .optional(),
    project: z
      .lazy(() => ProjectOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProjectApplicationsOrderByWithRelationInputObjectSchema = Schema;
