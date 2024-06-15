import { z } from 'zod';
import { EmployeeTypeSchema } from '../enums/EmployeeType.schema';
import { NestedEnumEmployeeTypeWithAggregatesFilterObjectSchema } from './NestedEnumEmployeeTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumEmployeeTypeFilterObjectSchema } from './NestedEnumEmployeeTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumEmployeeTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => EmployeeTypeSchema).optional(),
    in: z
      .union([
        z.lazy(() => EmployeeTypeSchema).array(),
        z.lazy(() => EmployeeTypeSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => EmployeeTypeSchema).array(),
        z.lazy(() => EmployeeTypeSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => EmployeeTypeSchema),
        z.lazy(() => NestedEnumEmployeeTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumEmployeeTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumEmployeeTypeFilterObjectSchema).optional(),
  })
  .strict();

export const EnumEmployeeTypeWithAggregatesFilterObjectSchema = Schema;
