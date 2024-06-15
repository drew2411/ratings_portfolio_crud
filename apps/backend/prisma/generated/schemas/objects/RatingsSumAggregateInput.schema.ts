import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsSumAggregateInputType> = z
  .object({
    Rating: z.literal(true).optional(),
    likes: z.literal(true).optional(),
    clientSatisfactionScore: z.literal(true).optional(),
  })
  .strict();

export const RatingsSumAggregateInputObjectSchema = Schema;
