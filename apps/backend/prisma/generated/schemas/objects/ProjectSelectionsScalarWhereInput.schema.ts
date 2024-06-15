import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumSkillsNullableListFilterObjectSchema } from './EnumSkillsNullableListFilter.schema';
import { EnumEmployeeTypeFilterObjectSchema } from './EnumEmployeeTypeFilter.schema';
import { EmployeeTypeSchema } from '../enums/EmployeeType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProjectSelectionsScalarWhereInputObjectSchema),
        z.lazy(() => ProjectSelectionsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectSelectionsScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectSelectionsScalarWhereInputObjectSchema),
        z.lazy(() => ProjectSelectionsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    projectSelectionID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    selecteAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    selectedFreelancerID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    wage: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    projectProjectID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    OfferingDetails: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    projectRole: z
      .lazy(() => EnumSkillsNullableListFilterObjectSchema)
      .optional(),
    endOfContract: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    empType: z
      .union([
        z.lazy(() => EnumEmployeeTypeFilterObjectSchema),
        z.lazy(() => EmployeeTypeSchema),
      ])
      .optional(),
  })
  .strict();

export const ProjectSelectionsScalarWhereInputObjectSchema = Schema;
