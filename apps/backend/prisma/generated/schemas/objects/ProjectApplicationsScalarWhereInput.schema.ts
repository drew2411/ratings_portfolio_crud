import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumApplicantStatusFilterObjectSchema } from './EnumApplicantStatusFilter.schema';
import { ApplicantStatusSchema } from '../enums/ApplicantStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProjectApplicationsScalarWhereInputObjectSchema),
        z.lazy(() => ProjectApplicationsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectApplicationsScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectApplicationsScalarWhereInputObjectSchema),
        z.lazy(() => ProjectApplicationsScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const ProjectApplicationsScalarWhereInputObjectSchema = Schema;
