import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientCountOutputTypeSelect> = z
  .object({
    Ratings: z.boolean().optional(),
    Project: z.boolean().optional(),
  })
  .strict();

export const ClientCountOutputTypeSelectObjectSchema = Schema;
