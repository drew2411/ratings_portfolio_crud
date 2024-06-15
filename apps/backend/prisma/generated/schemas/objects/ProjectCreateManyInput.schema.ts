import { z } from 'zod';
import { IndustrySchema } from '../enums/Industry.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateManyInput> = z
  .object({
    projectID: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    projectName: z.string(),
    projectDescription: z.string(),
    clientID: z.string(),
    isHiring: z.boolean().optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date(),
    paymentStatus: z.boolean().optional(),
    industry: z.lazy(() => IndustrySchema),
    proposedPrice: z.number(),
  })
  .strict();

export const ProjectCreateManyInputObjectSchema = Schema;
