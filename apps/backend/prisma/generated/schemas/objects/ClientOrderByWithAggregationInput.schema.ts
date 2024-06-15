import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClientCountOrderByAggregateInputObjectSchema } from './ClientCountOrderByAggregateInput.schema';
import { ClientAvgOrderByAggregateInputObjectSchema } from './ClientAvgOrderByAggregateInput.schema';
import { ClientMaxOrderByAggregateInputObjectSchema } from './ClientMaxOrderByAggregateInput.schema';
import { ClientMinOrderByAggregateInputObjectSchema } from './ClientMinOrderByAggregateInput.schema';
import { ClientSumOrderByAggregateInputObjectSchema } from './ClientSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientOrderByWithAggregationInput> = z
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
    _count: z
      .lazy(() => ClientCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ClientAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ClientMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ClientMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ClientSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ClientOrderByWithAggregationInputObjectSchema = Schema;
