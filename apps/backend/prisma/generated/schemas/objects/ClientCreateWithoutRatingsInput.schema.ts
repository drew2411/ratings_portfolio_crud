import { z } from 'zod';
import { ProjectCreateNestedManyWithoutClientInputObjectSchema } from './ProjectCreateNestedManyWithoutClientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientCreateWithoutRatingsInput> = z
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
    Project: z
      .lazy(() => ProjectCreateNestedManyWithoutClientInputObjectSchema)
      .optional(),
  })
  .strict();

export const ClientCreateWithoutRatingsInputObjectSchema = Schema;
