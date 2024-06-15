import { z } from 'zod';
import { RatingsCreateNestedManyWithoutClientInputObjectSchema } from './RatingsCreateNestedManyWithoutClientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientCreateWithoutProjectInput> = z
  .object({
    clientID: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    name: z.string(),
    userName: z.string(),
    email: z.string(),
    phoneNumber: z.number(),
    basedIn: z.string(),
    companyName: z.string().optional().nullable(),
    noOfOrders: z.number(),
    Ratings: z
      .lazy(() => RatingsCreateNestedManyWithoutClientInputObjectSchema)
      .optional(),
  })
  .strict();

export const ClientCreateWithoutProjectInputObjectSchema = Schema;
