import { z } from 'zod';
import { ProjectSelectObjectSchema } from './ProjectSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectArgs> = z
  .object({
    select: z.lazy(() => ProjectSelectObjectSchema).optional(),
  })
  .strict();

export const ProjectArgsObjectSchema = Schema;
