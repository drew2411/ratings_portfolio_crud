import { z } from 'zod';
import { IndustrySchema } from '../enums/Industry.schema';
import { NestedEnumIndustryFilterObjectSchema } from './NestedEnumIndustryFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumIndustryFilter> = z
  .object({
    equals: z.lazy(() => IndustrySchema).optional(),
    in: z
      .union([
        z.lazy(() => IndustrySchema).array(),
        z.lazy(() => IndustrySchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => IndustrySchema).array(),
        z.lazy(() => IndustrySchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => IndustrySchema),
        z.lazy(() => NestedEnumIndustryFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumIndustryFilterObjectSchema = Schema;
