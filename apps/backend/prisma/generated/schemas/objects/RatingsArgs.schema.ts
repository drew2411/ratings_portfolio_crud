import { z } from 'zod';
import { RatingsSelectObjectSchema } from './RatingsSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsArgs> = z
  .object({
    select: z.lazy(() => RatingsSelectObjectSchema).optional(),
  })
  .strict();

export const RatingsArgsObjectSchema = Schema;
