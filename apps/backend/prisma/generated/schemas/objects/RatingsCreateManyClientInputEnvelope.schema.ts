import { z } from 'zod';
import { RatingsCreateManyClientInputObjectSchema } from './RatingsCreateManyClientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsCreateManyClientInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RatingsCreateManyClientInputObjectSchema),
      z.lazy(() => RatingsCreateManyClientInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const RatingsCreateManyClientInputEnvelopeObjectSchema = Schema;
