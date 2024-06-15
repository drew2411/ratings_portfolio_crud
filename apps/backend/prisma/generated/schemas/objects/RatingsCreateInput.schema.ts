import { z } from 'zod';
import { ClientCreateNestedOneWithoutRatingsInputObjectSchema } from './ClientCreateNestedOneWithoutRatingsInput.schema';
import { FreelancerCreateNestedOneWithoutRatingsInputObjectSchema } from './FreelancerCreateNestedOneWithoutRatingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsCreateInput> = z
  .object({
    reviewID: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Rating: z.number(),
    feedBack: z.string(),
    likes: z.number().optional(),
    clientSatisfactionScore: z.number().optional(),
    client: z.lazy(() => ClientCreateNestedOneWithoutRatingsInputObjectSchema),
    freelancer: z.lazy(
      () => FreelancerCreateNestedOneWithoutRatingsInputObjectSchema
    ),
  })
  .strict();

export const RatingsCreateInputObjectSchema = Schema;
