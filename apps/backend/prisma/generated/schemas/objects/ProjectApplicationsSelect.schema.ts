import { z } from 'zod';
import { FreelancerArgsObjectSchema } from './FreelancerArgs.schema';
import { ProjectArgsObjectSchema } from './ProjectArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsSelect> = z
  .object({
    projectApplicationID: z.boolean().optional(),
    submittedAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    applicant: z
      .union([z.boolean(), z.lazy(() => FreelancerArgsObjectSchema)])
      .optional(),
    applicantID: z.boolean().optional(),
    project: z
      .union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)])
      .optional(),
    projectProjectID: z.boolean().optional(),
    proposedAmount: z.boolean().optional(),
    addtionalNotes: z.boolean().optional(),
    Status: z.boolean().optional(),
  })
  .strict();

export const ProjectApplicationsSelectObjectSchema = Schema;
