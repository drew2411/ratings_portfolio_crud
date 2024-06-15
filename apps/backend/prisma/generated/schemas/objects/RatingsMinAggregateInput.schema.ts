import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsMinAggregateInputType> = z
  .object({
    reviewID: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    clientClientID: z.literal(true).optional(),
    freelancerFreelancerID: z.literal(true).optional(),
    Rating: z.literal(true).optional(),
    feedBack: z.literal(true).optional(),
    likes: z.literal(true).optional(),
    clientSatisfactionScore: z.literal(true).optional(),
  })
  .strict();

export const RatingsMinAggregateInputObjectSchema = Schema;
