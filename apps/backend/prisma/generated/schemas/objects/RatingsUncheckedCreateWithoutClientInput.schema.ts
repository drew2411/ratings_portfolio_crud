import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsUncheckedCreateWithoutClientInput> = z
  .object({
    reviewID: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    freelancerFreelancerID: z.string(),
    Rating: z.number(),
    feedBack: z.string(),
    likes: z.number().optional(),
    clientSatisfactionScore: z.number().optional(),
  })
  .strict();

export const RatingsUncheckedCreateWithoutClientInputObjectSchema = Schema;
