import { z } from 'zod';
import { ProjectSelectionsCreateprojectRoleInputObjectSchema } from './ProjectSelectionsCreateprojectRoleInput.schema';
import { SkillsSchema } from '../enums/Skills.schema';
import { EmployeeTypeSchema } from '../enums/EmployeeType.schema';
import { FreelancerCreateNestedOneWithoutProjectSelectionInputObjectSchema } from './FreelancerCreateNestedOneWithoutProjectSelectionInput.schema';
import { ProjectCreateNestedOneWithoutProjectSelectionInputObjectSchema } from './ProjectCreateNestedOneWithoutProjectSelectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsCreateInput> = z
  .object({
    projectSelectionID: z.string().optional(),
    selecteAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    wage: z.number(),
    OfferingDetails: z.string().optional().nullable(),
    projectRole: z
      .union([
        z.lazy(() => ProjectSelectionsCreateprojectRoleInputObjectSchema),
        z.lazy(() => SkillsSchema).array(),
      ])
      .optional(),
    endOfContract: z.coerce.date(),
    empType: z.lazy(() => EmployeeTypeSchema).optional(),
    selectedFreelancer: z.lazy(
      () => FreelancerCreateNestedOneWithoutProjectSelectionInputObjectSchema
    ),
    project: z.lazy(
      () => ProjectCreateNestedOneWithoutProjectSelectionInputObjectSchema
    ),
  })
  .strict();

export const ProjectSelectionsCreateInputObjectSchema = Schema;
