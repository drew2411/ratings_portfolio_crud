import { z } from 'zod';
import { RatingsCreateManyFreelancerInputObjectSchema } from './RatingsCreateManyFreelancerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsCreateManyFreelancerInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RatingsCreateManyFreelancerInputObjectSchema),
      z.lazy(() => RatingsCreateManyFreelancerInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const RatingsCreateManyFreelancerInputEnvelopeObjectSchema = Schema;
