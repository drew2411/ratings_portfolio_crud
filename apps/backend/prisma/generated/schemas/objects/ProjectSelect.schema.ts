import { z } from 'zod';
import { ClientArgsObjectSchema } from './ClientArgs.schema';
import { ProjectApplicationsFindManySchema } from '../findManyProjectApplications.schema';
import { ProjectSelectionsFindManySchema } from '../findManyProjectSelections.schema';
import { ProjectCountOutputTypeArgsObjectSchema } from './ProjectCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelect> = z
  .object({
    projectID: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    projectName: z.boolean().optional(),
    projectDescription: z.boolean().optional(),
    client: z
      .union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)])
      .optional(),
    clientID: z.boolean().optional(),
    isHiring: z.boolean().optional(),
    startDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    paymentStatus: z.boolean().optional(),
    industry: z.boolean().optional(),
    proposedPrice: z.boolean().optional(),
    Applications: z
      .union([z.boolean(), z.lazy(() => ProjectApplicationsFindManySchema)])
      .optional(),
    ProjectSelection: z
      .union([z.boolean(), z.lazy(() => ProjectSelectionsFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ProjectCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProjectSelectObjectSchema = Schema;
