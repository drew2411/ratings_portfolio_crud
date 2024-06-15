import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsWhereUniqueInput> = z
  .object({
    reviewID: z.string().optional(),
  })
  .strict();

export const RatingsWhereUniqueInputObjectSchema = Schema;
