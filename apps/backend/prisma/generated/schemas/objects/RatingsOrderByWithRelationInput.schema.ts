import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ClientOrderByWithRelationInputObjectSchema } from './ClientOrderByWithRelationInput.schema';
import { FreelancerOrderByWithRelationInputObjectSchema } from './FreelancerOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsOrderByWithRelationInput> = z
  .object({
    reviewID: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    clientClientID: z.lazy(() => SortOrderSchema).optional(),
    freelancerFreelancerID: z.lazy(() => SortOrderSchema).optional(),
    Rating: z.lazy(() => SortOrderSchema).optional(),
    feedBack: z.lazy(() => SortOrderSchema).optional(),
    likes: z.lazy(() => SortOrderSchema).optional(),
    clientSatisfactionScore: z.lazy(() => SortOrderSchema).optional(),
    client: z.lazy(() => ClientOrderByWithRelationInputObjectSchema).optional(),
    freelancer: z
      .lazy(() => FreelancerOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const RatingsOrderByWithRelationInputObjectSchema = Schema;
