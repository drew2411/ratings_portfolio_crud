import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsSumAggregateInputType> = z
  .object({
    proposedAmount: z.literal(true).optional(),
  })
  .strict();

export const ProjectApplicationsSumAggregateInputObjectSchema = Schema;
