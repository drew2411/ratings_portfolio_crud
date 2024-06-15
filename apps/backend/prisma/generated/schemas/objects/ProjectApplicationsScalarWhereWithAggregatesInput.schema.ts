import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumApplicantStatusWithAggregatesFilterObjectSchema } from './EnumApplicantStatusWithAggregatesFilter.schema';
import { ApplicantStatusSchema } from '../enums/ApplicantStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => ProjectApplicationsScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectApplicationsScalarWhereWithAggregatesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () => ProjectApplicationsScalarWhereWithAggregatesInputObjectSchema
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => ProjectApplicationsScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectApplicationsScalarWhereWithAggregatesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      projectApplicationID: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      submittedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional(),
      applicantID: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      projectProjectID: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      proposedAmount: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
      addtionalNotes: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      Status: z
        .union([
          z.lazy(() => EnumApplicantStatusWithAggregatesFilterObjectSchema),
          z.lazy(() => ApplicantStatusSchema),
        ])
        .optional(),
    })
    .strict();

export const ProjectApplicationsScalarWhereWithAggregatesInputObjectSchema =
  Schema;
