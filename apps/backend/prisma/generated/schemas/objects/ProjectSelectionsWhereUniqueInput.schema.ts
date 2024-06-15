import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsWhereUniqueInput> = z
  .object({
    projectSelectionID: z.string().optional(),
  })
  .strict();

export const ProjectSelectionsWhereUniqueInputObjectSchema = Schema;
