import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumApplicantStatusFilterObjectSchema } from './EnumApplicantStatusFilter.schema';
import { ApplicantStatusSchema } from '../enums/ApplicantStatus.schema';
import { FreelancerRelationFilterObjectSchema } from './FreelancerRelationFilter.schema';
import { FreelancerWhereInputObjectSchema } from './FreelancerWhereInput.schema';
import { ProjectRelationFilterObjectSchema } from './ProjectRelationFilter.schema';
import { ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProjectApplicationsWhereInputObjectSchema),
        z.lazy(() => ProjectApplicationsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectApplicationsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectApplicationsWhereInputObjectSchema),
        z.lazy(() => ProjectApplicationsWhereInputObjectSchema).array(),
      ])
      .optional(),
    projectApplicationID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    submittedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    applicantID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    projectProjectID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    proposedAmount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    addtionalNotes: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    Status: z
      .union([
        z.lazy(() => EnumApplicantStatusFilterObjectSchema),
        z.lazy(() => ApplicantStatusSchema),
      ])
      .optional(),
    applicant: z
      .union([
        z.lazy(() => FreelancerRelationFilterObjectSchema),
        z.lazy(() => FreelancerWhereInputObjectSchema),
      ])
      .optional(),
    project: z
      .union([
        z.lazy(() => ProjectRelationFilterObjectSchema),
        z.lazy(() => ProjectWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProjectApplicationsWhereInputObjectSchema = Schema;
