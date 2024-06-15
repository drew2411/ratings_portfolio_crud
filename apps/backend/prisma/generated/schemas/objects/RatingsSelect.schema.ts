import { z } from 'zod';
import { ClientArgsObjectSchema } from './ClientArgs.schema';
import { FreelancerArgsObjectSchema } from './FreelancerArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsSelect> = z
  .object({
    reviewID: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    client: z
      .union([z.boolean(), z.lazy(() => ClientArgsObjectSchema)])
      .optional(),
    clientClientID: z.boolean().optional(),
    freelancer: z
      .union([z.boolean(), z.lazy(() => FreelancerArgsObjectSchema)])
      .optional(),
    freelancerFreelancerID: z.boolean().optional(),
    Rating: z.boolean().optional(),
    feedBack: z.boolean().optional(),
    likes: z.boolean().optional(),
    clientSatisfactionScore: z.boolean().optional(),
  })
  .strict();

export const RatingsSelectObjectSchema = Schema;
