import { z } from 'zod';
import { EmployeeTypeSchema } from '../enums/EmployeeType.schema';
import { NestedEnumEmployeeTypeFilterObjectSchema } from './NestedEnumEmployeeTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumEmployeeTypeFilter> = z
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
        z.lazy(() => NestedEnumEmployeeTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumEmployeeTypeFilterObjectSchema = Schema;
