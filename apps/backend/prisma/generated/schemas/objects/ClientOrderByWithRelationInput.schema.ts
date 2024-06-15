import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RatingsOrderByRelationAggregateInputObjectSchema } from './RatingsOrderByRelationAggregateInput.schema';
import { ProjectOrderByRelationAggregateInputObjectSchema } from './ProjectOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientOrderByWithRelationInput> = z
  .object({
    clientID: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    userName: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    phoneNumber: z.lazy(() => SortOrderSchema).optional(),
    basedIn: z.lazy(() => SortOrderSchema).optional(),
    companyName: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    noOfOrders: z.lazy(() => SortOrderSchema).optional(),
    Ratings: z
      .lazy(() => RatingsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Project: z
      .lazy(() => ProjectOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ClientOrderByWithRelationInputObjectSchema = Schema;
