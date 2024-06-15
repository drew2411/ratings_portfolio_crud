import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RatingsOrderByRelationAggregateInputObjectSchema } from './RatingsOrderByRelationAggregateInput.schema';
import { ProjectApplicationsOrderByRelationAggregateInputObjectSchema } from './ProjectApplicationsOrderByRelationAggregateInput.schema';
import { ProjectSelectionsOrderByRelationAggregateInputObjectSchema } from './ProjectSelectionsOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerOrderByWithRelationInput> = z
  .object({
    freelancerID: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    userName: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    phoneNumber: z.lazy(() => SortOrderSchema).optional(),
    bio: z.lazy(() => SortOrderSchema).optional(),
    basedIn: z.lazy(() => SortOrderSchema).optional(),
    totalEarnings: z.lazy(() => SortOrderSchema).optional(),
    avgRating: z.lazy(() => SortOrderSchema).optional(),
    workPreferences: z.lazy(() => SortOrderSchema).optional(),
    Ratings: z
      .lazy(() => RatingsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Applications: z
      .lazy(() => ProjectApplicationsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    ProjectSelection: z
      .lazy(() => ProjectSelectionsOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const FreelancerOrderByWithRelationInputObjectSchema = Schema;
