import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsAvgAggregateInputType> = z
  .object({
    proposedAmount: z.literal(true).optional(),
  })
  .strict();

export const ProjectApplicationsAvgAggregateInputObjectSchema = Schema;
