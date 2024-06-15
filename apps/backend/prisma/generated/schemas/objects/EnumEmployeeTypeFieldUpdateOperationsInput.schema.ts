import { z } from 'zod';
import { EmployeeTypeSchema } from '../enums/EmployeeType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumEmployeeTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => EmployeeTypeSchema).optional(),
  })
  .strict();

export const EnumEmployeeTypeFieldUpdateOperationsInputObjectSchema = Schema;
