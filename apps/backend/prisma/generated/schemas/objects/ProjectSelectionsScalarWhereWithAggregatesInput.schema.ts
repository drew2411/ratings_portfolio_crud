import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumSkillsNullableListFilterObjectSchema } from './EnumSkillsNullableListFilter.schema';
import { EnumEmployeeTypeWithAggregatesFilterObjectSchema } from './EnumEmployeeTypeWithAggregatesFilter.schema';
import { EmployeeTypeSchema } from '../enums/EmployeeType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => ProjectSelectionsScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () => ProjectSelectionsScalarWhereWithAggregatesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ProjectSelectionsScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => ProjectSelectionsScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () => ProjectSelectionsScalarWhereWithAggregatesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      projectSelectionID: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      selecteAt: z
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
      selectedFreelancerID: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      wage: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
      projectProjectID: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      OfferingDetails: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      projectRole: z
        .lazy(() => EnumSkillsNullableListFilterObjectSchema)
        .optional(),
      endOfContract: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional(),
      empType: z
        .union([
          z.lazy(() => EnumEmployeeTypeWithAggregatesFilterObjectSchema),
          z.lazy(() => EmployeeTypeSchema),
        ])
        .optional(),
    })
    .strict();

export const ProjectSelectionsScalarWhereWithAggregatesInputObjectSchema =
  Schema;
