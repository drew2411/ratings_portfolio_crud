import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCountOutputTypeSelect> = z
  .object({
    Applications: z.boolean().optional(),
    ProjectSelection: z.boolean().optional(),
  })
  .strict();

export const ProjectCountOutputTypeSelectObjectSchema = Schema;
