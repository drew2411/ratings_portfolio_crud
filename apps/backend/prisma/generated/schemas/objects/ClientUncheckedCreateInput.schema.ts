import { z } from 'zod';
import { RatingsUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './RatingsUncheckedCreateNestedManyWithoutClientInput.schema';
import { ProjectUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './ProjectUncheckedCreateNestedManyWithoutClientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientUncheckedCreateInput> = z
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
      .lazy(
        () => RatingsUncheckedCreateNestedManyWithoutClientInputObjectSchema
      )
      .optional(),
    Project: z
      .lazy(
        () => ProjectUncheckedCreateNestedManyWithoutClientInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const ClientUncheckedCreateInputObjectSchema = Schema;
