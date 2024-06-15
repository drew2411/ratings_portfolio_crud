import { z } from 'zod';
import { SkillsSchema } from '../enums/Skills.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumSkillsNullableListFilter> = z
  .object({
    equals: z
      .lazy(() => SkillsSchema)
      .array()
      .optional()
      .nullable(),
    has: z
      .lazy(() => SkillsSchema)
      .optional()
      .nullable(),
    hasEvery: z
      .lazy(() => SkillsSchema)
      .array()
      .optional(),
    hasSome: z
      .lazy(() => SkillsSchema)
      .array()
      .optional(),
    isEmpty: z.boolean().optional(),
  })
  .strict();

export const EnumSkillsNullableListFilterObjectSchema = Schema;
