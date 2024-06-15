import { z } from 'zod';
import { ClientCountOutputTypeSelectObjectSchema } from './ClientCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ClientCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const ClientCountOutputTypeArgsObjectSchema = Schema;
