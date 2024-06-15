import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerWhereUniqueInput> = z
  .object({
    freelancerID: z.string().optional(),
  })
  .strict();

export const FreelancerWhereUniqueInputObjectSchema = Schema;
