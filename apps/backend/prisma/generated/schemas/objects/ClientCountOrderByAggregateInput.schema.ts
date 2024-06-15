import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientCountOrderByAggregateInput> = z
  .object({
    clientID: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    userName: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    phoneNumber: z.lazy(() => SortOrderSchema).optional(),
    basedIn: z.lazy(() => SortOrderSchema).optional(),
    companyName: z.lazy(() => SortOrderSchema).optional(),
    noOfOrders: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ClientCountOrderByAggregateInputObjectSchema = Schema;
