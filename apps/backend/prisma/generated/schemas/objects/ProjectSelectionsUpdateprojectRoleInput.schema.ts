import { z } from 'zod';
import { SkillsSchema } from '../enums/Skills.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsUpdateprojectRoleInput> = z
  .object({
    set: z
      .lazy(() => SkillsSchema)
      .array()
      .optional(),
    push: z
      .union([z.lazy(() => SkillsSchema), z.lazy(() => SkillsSchema).array()])
      .optional(),
  })
  .strict();

export const ProjectSelectionsUpdateprojectRoleInputObjectSchema = Schema;
