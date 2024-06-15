import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientMinAggregateInputType> = z
  .object({
    clientID: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    name: z.literal(true).optional(),
    userName: z.literal(true).optional(),
    email: z.literal(true).optional(),
    phoneNumber: z.literal(true).optional(),
    basedIn: z.literal(true).optional(),
    companyName: z.literal(true).optional(),
    noOfOrders: z.literal(true).optional(),
  })
  .strict();

export const ClientMinAggregateInputObjectSchema = Schema;
