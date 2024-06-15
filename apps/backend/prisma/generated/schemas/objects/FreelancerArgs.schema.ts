import { z } from 'zod';
import { FreelancerSelectObjectSchema } from './FreelancerSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerArgs> = z
  .object({
    select: z.lazy(() => FreelancerSelectObjectSchema).optional(),
  })
  .strict();

export const FreelancerArgsObjectSchema = Schema;
