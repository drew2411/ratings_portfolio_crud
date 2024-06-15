import { z } from 'zod';
import { ProjectSelectionsCreateprojectRoleInputObjectSchema } from './ProjectSelectionsCreateprojectRoleInput.schema';
import { SkillsSchema } from '../enums/Skills.schema';
import { EmployeeTypeSchema } from '../enums/EmployeeType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsUncheckedCreateInput> = z
  .object({
    projectSelectionID: z.string().optional(),
    selecteAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    selectedFreelancerID: z.string(),
    wage: z.number(),
    projectProjectID: z.string(),
    OfferingDetails: z.string().optional().nullable(),
    projectRole: z
      .union([
        z.lazy(() => ProjectSelectionsCreateprojectRoleInputObjectSchema),
        z.lazy(() => SkillsSchema).array(),
      ])
      .optional(),
    endOfContract: z.coerce.date(),
    empType: z.lazy(() => EmployeeTypeSchema).optional(),
  })
  .strict();

export const ProjectSelectionsUncheckedCreateInputObjectSchema = Schema;
