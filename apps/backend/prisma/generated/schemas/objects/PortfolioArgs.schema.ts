import { z } from 'zod';
import { PortfolioSelectObjectSchema } from './PortfolioSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PortfolioArgs> = z
  .object({
    select: z.lazy(() => PortfolioSelectObjectSchema).optional(),
  })
  .strict();

export const PortfolioArgsObjectSchema = Schema;
