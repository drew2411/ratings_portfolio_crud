import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsMinAggregateInputType> = z
  .object({
    projectApplicationID: z.literal(true).optional(),
    submittedAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    applicantID: z.literal(true).optional(),
    projectProjectID: z.literal(true).optional(),
    proposedAmount: z.literal(true).optional(),
    addtionalNotes: z.literal(true).optional(),
    Status: z.literal(true).optional(),
  })
  .strict();

export const ProjectApplicationsMinAggregateInputObjectSchema = Schema;
