import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { RatingsListRelationFilterObjectSchema } from './RatingsListRelationFilter.schema';
import { ProjectListRelationFilterObjectSchema } from './ProjectListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ClientWhereInputObjectSchema),
        z.lazy(() => ClientWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ClientWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ClientWhereInputObjectSchema),
        z.lazy(() => ClientWhereInputObjectSchema).array(),
      ])
      .optional(),
    clientID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    phoneNumber: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    basedIn: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    companyName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    noOfOrders: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    Ratings: z.lazy(() => RatingsListRelationFilterObjectSchema).optional(),
    Project: z.lazy(() => ProjectListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ClientWhereInputObjectSchema = Schema;
