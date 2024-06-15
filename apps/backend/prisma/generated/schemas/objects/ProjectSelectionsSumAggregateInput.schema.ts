import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsSumAggregateInputType> = z
  .object({
    wage: z.literal(true).optional(),
  })
  .strict();

export const ProjectSelectionsSumAggregateInputObjectSchema = Schema;
