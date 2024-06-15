import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerCreateManyInput> = z
  .object({
    freelancerID: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    name: z.string(),
    userName: z.string(),
    email: z.string(),
    phoneNumber: z.number(),
    bio: z.string(),
    basedIn: z.string(),
    totalEarnings: z.number().optional(),
    avgRating: z.number().optional(),
    workPreferences: z.string(),
  })
  .strict();

export const FreelancerCreateManyInputObjectSchema = Schema;
