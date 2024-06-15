import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerCountOutputTypeSelect> = z
  .object({
    Ratings: z.boolean().optional(),
    Applications: z.boolean().optional(),
    ProjectSelection: z.boolean().optional(),
  })
  .strict();

export const FreelancerCountOutputTypeSelectObjectSchema = Schema;
