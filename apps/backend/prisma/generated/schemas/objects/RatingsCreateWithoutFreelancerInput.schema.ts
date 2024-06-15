import { z } from 'zod';
import { ClientCreateNestedOneWithoutRatingsInputObjectSchema } from './ClientCreateNestedOneWithoutRatingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsCreateWithoutFreelancerInput> = z
  .object({
    reviewID: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Rating: z.number(),
    feedBack: z.string(),
    likes: z.number().optional(),
    clientSatisfactionScore: z.number().optional(),
    client: z.lazy(() => ClientCreateNestedOneWithoutRatingsInputObjectSchema),
  })
  .strict();

export const RatingsCreateWithoutFreelancerInputObjectSchema = Schema;
