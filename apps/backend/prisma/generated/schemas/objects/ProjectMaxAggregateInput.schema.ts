import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectMaxAggregateInputType> = z
  .object({
    projectID: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    projectName: z.literal(true).optional(),
    projectDescription: z.literal(true).optional(),
    clientID: z.literal(true).optional(),
    isHiring: z.literal(true).optional(),
    startDate: z.literal(true).optional(),
    endDate: z.literal(true).optional(),
    paymentStatus: z.literal(true).optional(),
    industry: z.literal(true).optional(),
    proposedPrice: z.literal(true).optional(),
  })
  .strict();

export const ProjectMaxAggregateInputObjectSchema = Schema;
