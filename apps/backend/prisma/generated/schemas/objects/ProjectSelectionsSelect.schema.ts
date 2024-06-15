import { z } from 'zod';
import { FreelancerArgsObjectSchema } from './FreelancerArgs.schema';
import { ProjectArgsObjectSchema } from './ProjectArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsSelect> = z
  .object({
    projectSelectionID: z.boolean().optional(),
    selecteAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    selectedFreelancer: z
      .union([z.boolean(), z.lazy(() => FreelancerArgsObjectSchema)])
      .optional(),
    selectedFreelancerID: z.boolean().optional(),
    wage: z.boolean().optional(),
    project: z
      .union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)])
      .optional(),
    projectProjectID: z.boolean().optional(),
    OfferingDetails: z.boolean().optional(),
    projectRole: z.boolean().optional(),
    endOfContract: z.boolean().optional(),
    empType: z.boolean().optional(),
  })
  .strict();

export const ProjectSelectionsSelectObjectSchema = Schema;
