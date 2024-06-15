import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSumAggregateInputType> = z
  .object({
    proposedPrice: z.literal(true).optional(),
  })
  .strict();

export const ProjectSumAggregateInputObjectSchema = Schema;
