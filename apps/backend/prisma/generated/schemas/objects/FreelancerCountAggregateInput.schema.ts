import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerCountAggregateInputType> = z
  .object({
    freelancerID: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    name: z.literal(true).optional(),
    userName: z.literal(true).optional(),
    email: z.literal(true).optional(),
    phoneNumber: z.literal(true).optional(),
    bio: z.literal(true).optional(),
    basedIn: z.literal(true).optional(),
    totalEarnings: z.literal(true).optional(),
    avgRating: z.literal(true).optional(),
    workPreferences: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const FreelancerCountAggregateInputObjectSchema = Schema;
