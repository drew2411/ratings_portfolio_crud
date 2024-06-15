import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { RatingsListRelationFilterObjectSchema } from './RatingsListRelationFilter.schema';
import { ProjectApplicationsListRelationFilterObjectSchema } from './ProjectApplicationsListRelationFilter.schema';
import { ProjectSelectionsListRelationFilterObjectSchema } from './ProjectSelectionsListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FreelancerWhereInputObjectSchema),
        z.lazy(() => FreelancerWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FreelancerWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FreelancerWhereInputObjectSchema),
        z.lazy(() => FreelancerWhereInputObjectSchema).array(),
      ])
      .optional(),
    freelancerID: z
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
    bio: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    basedIn: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    totalEarnings: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    avgRating: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    workPreferences: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    Ratings: z.lazy(() => RatingsListRelationFilterObjectSchema).optional(),
    Applications: z
      .lazy(() => ProjectApplicationsListRelationFilterObjectSchema)
      .optional(),
    ProjectSelection: z
      .lazy(() => ProjectSelectionsListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const FreelancerWhereInputObjectSchema = Schema;
