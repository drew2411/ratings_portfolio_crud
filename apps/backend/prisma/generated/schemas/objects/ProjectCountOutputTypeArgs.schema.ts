import { z } from 'zod';
import { ProjectCountOutputTypeSelectObjectSchema } from './ProjectCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ProjectCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const ProjectCountOutputTypeArgsObjectSchema = Schema;
