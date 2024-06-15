import { z } from 'zod';
import { SkillsSchema } from '../enums/Skills.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsCreateprojectRoleInput> = z
  .object({
    set: z.lazy(() => SkillsSchema).array(),
  })
  .strict();

export const ProjectSelectionsCreateprojectRoleInputObjectSchema = Schema;
