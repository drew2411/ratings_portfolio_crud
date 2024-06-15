import { z } from 'zod';
import { ClientSelectObjectSchema } from './ClientSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientArgs> = z
  .object({
    select: z.lazy(() => ClientSelectObjectSchema).optional(),
  })
  .strict();

export const ClientArgsObjectSchema = Schema;
