import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumSkillsNullableListFilterObjectSchema } from './EnumSkillsNullableListFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PortfolioWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PortfolioWhereInputObjectSchema),
        z.lazy(() => PortfolioWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PortfolioWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PortfolioWhereInputObjectSchema),
        z.lazy(() => PortfolioWhereInputObjectSchema).array(),
      ])
      .optional(),
    portfolioID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    usefulLinks: z
      .lazy(() => EnumSkillsNullableListFilterObjectSchema)
      .optional(),
    yearsOfExperience: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const PortfolioWhereInputObjectSchema = Schema;
