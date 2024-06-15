import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsWhereUniqueInput> = z
  .object({
    projectApplicationID: z.string().optional(),
  })
  .strict();

export const ProjectApplicationsWhereUniqueInputObjectSchema = Schema;
