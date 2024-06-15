import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RatingsScalarWhereInputObjectSchema),
        z.lazy(() => RatingsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RatingsScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RatingsScalarWhereInputObjectSchema),
        z.lazy(() => RatingsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    reviewID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    clientClientID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    freelancerFreelancerID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    Rating: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    feedBack: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    likes: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    clientSatisfactionScore: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const RatingsScalarWhereInputObjectSchema = Schema;
