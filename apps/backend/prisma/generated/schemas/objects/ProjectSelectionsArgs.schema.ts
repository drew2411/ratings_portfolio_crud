import { z } from 'zod';
import { ProjectSelectionsSelectObjectSchema } from './ProjectSelectionsSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsArgs> = z
  .object({
    select: z.lazy(() => ProjectSelectionsSelectObjectSchema).optional(),
  })
  .strict();

export const ProjectSelectionsArgsObjectSchema = Schema;
