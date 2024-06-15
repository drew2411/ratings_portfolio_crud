import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ClientRelationFilterObjectSchema } from './ClientRelationFilter.schema';
import { ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { FreelancerRelationFilterObjectSchema } from './FreelancerRelationFilter.schema';
import { FreelancerWhereInputObjectSchema } from './FreelancerWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RatingsWhereInputObjectSchema),
        z.lazy(() => RatingsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RatingsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RatingsWhereInputObjectSchema),
        z.lazy(() => RatingsWhereInputObjectSchema).array(),
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
    client: z
      .union([
        z.lazy(() => ClientRelationFilterObjectSchema),
        z.lazy(() => ClientWhereInputObjectSchema),
      ])
      .optional(),
    freelancer: z
      .union([
        z.lazy(() => FreelancerRelationFilterObjectSchema),
        z.lazy(() => FreelancerWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const RatingsWhereInputObjectSchema = Schema;
