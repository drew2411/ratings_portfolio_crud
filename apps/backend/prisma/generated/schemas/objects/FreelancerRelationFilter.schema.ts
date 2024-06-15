import { z } from 'zod';
import { FreelancerWhereInputObjectSchema } from './FreelancerWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerRelationFilter> = z
  .object({
    is: z
      .lazy(() => FreelancerWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => FreelancerWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const FreelancerRelationFilterObjectSchema = Schema;
