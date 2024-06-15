import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsMinAggregateInputType> = z
  .object({
    projectSelectionID: z.literal(true).optional(),
    selecteAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    selectedFreelancerID: z.literal(true).optional(),
    wage: z.literal(true).optional(),
    projectProjectID: z.literal(true).optional(),
    OfferingDetails: z.literal(true).optional(),
    endOfContract: z.literal(true).optional(),
    empType: z.literal(true).optional(),
  })
  .strict();

export const ProjectSelectionsMinAggregateInputObjectSchema = Schema;
