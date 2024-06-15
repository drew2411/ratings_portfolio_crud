import { z } from 'zod';
import { ProjectApplicationsSelectObjectSchema } from './ProjectApplicationsSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsArgs> = z
  .object({
    select: z.lazy(() => ProjectApplicationsSelectObjectSchema).optional(),
  })
  .strict();

export const ProjectApplicationsArgsObjectSchema = Schema;
