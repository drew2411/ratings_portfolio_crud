import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumSkillsNullableListFilterObjectSchema } from './EnumSkillsNullableListFilter.schema';
import { EnumEmployeeTypeFilterObjectSchema } from './EnumEmployeeTypeFilter.schema';
import { EmployeeTypeSchema } from '../enums/EmployeeType.schema';
import { FreelancerRelationFilterObjectSchema } from './FreelancerRelationFilter.schema';
import { FreelancerWhereInputObjectSchema } from './FreelancerWhereInput.schema';
import { ProjectRelationFilterObjectSchema } from './ProjectRelationFilter.schema';
import { ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProjectSelectionsWhereInputObjectSchema),
        z.lazy(() => ProjectSelectionsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectSelectionsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectSelectionsWhereInputObjectSchema),
        z.lazy(() => ProjectSelectionsWhereInputObjectSchema).array(),
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
    selectedFreelancer: z
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

export const ProjectSelectionsWhereInputObjectSchema = Schema;
