import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientAvgOrderByAggregateInput> = z
  .object({
    phoneNumber: z.lazy(() => SortOrderSchema).optional(),
    noOfOrders: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ClientAvgOrderByAggregateInputObjectSchema = Schema;
