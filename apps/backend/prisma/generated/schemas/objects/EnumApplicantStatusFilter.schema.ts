import { z } from 'zod';
import { ApplicantStatusSchema } from '../enums/ApplicantStatus.schema';
import { NestedEnumApplicantStatusFilterObjectSchema } from './NestedEnumApplicantStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumApplicantStatusFilter> = z
  .object({
    equals: z.lazy(() => ApplicantStatusSchema).optional(),
    in: z
      .union([
        z.lazy(() => ApplicantStatusSchema).array(),
        z.lazy(() => ApplicantStatusSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => ApplicantStatusSchema).array(),
        z.lazy(() => ApplicantStatusSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => ApplicantStatusSchema),
        z.lazy(() => NestedEnumApplicantStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumApplicantStatusFilterObjectSchema = Schema;
