import { z } from 'zod';
import { IndustrySchema } from '../enums/Industry.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumIndustryFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => IndustrySchema).optional(),
  })
  .strict();

export const EnumIndustryFieldUpdateOperationsInputObjectSchema = Schema;
