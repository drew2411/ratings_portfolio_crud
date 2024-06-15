import { z } from 'zod';
import { FreelancerCountOutputTypeSelectObjectSchema } from './FreelancerCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => FreelancerCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict();

export const FreelancerCountOutputTypeArgsObjectSchema = Schema;
