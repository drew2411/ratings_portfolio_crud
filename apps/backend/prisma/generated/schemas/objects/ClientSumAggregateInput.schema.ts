import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientSumAggregateInputType> = z
  .object({
    phoneNumber: z.literal(true).optional(),
    noOfOrders: z.literal(true).optional(),
  })
  .strict();

export const ClientSumAggregateInputObjectSchema = Schema;
