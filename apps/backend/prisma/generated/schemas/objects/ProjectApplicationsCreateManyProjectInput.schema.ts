import { z } from 'zod';
import { ApplicantStatusSchema } from '../enums/ApplicantStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsCreateManyProjectInput> = z
  .object({
    projectApplicationID: z.string().optional(),
    submittedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    applicantID: z.string(),
    proposedAmount: z.number(),
    addtionalNotes: z.string().optional().nullable(),
    Status: z.lazy(() => ApplicantStatusSchema).optional(),
  })
  .strict();

export const ProjectApplicationsCreateManyProjectInputObjectSchema = Schema;
