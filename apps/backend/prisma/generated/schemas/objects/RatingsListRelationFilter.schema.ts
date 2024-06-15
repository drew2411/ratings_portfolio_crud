import { z } from 'zod';
import { RatingsWhereInputObjectSchema } from './RatingsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsListRelationFilter> = z
  .object({
    every: z.lazy(() => RatingsWhereInputObjectSchema).optional(),
    some: z.lazy(() => RatingsWhereInputObjectSchema).optional(),
    none: z.lazy(() => RatingsWhereInputObjectSchema).optional(),
  })
  .strict();

export const RatingsListRelationFilterObjectSchema = Schema;
