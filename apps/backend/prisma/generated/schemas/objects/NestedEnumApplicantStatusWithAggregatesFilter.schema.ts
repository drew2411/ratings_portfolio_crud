import { z } from 'zod';
import { ApplicantStatusSchema } from '../enums/ApplicantStatus.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumApplicantStatusFilterObjectSchema } from './NestedEnumApplicantStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumApplicantStatusWithAggregatesFilter> =
  z
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
          z.lazy(
            () => NestedEnumApplicantStatusWithAggregatesFilterObjectSchema
          ),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumApplicantStatusFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumApplicantStatusFilterObjectSchema)
        .optional(),
    })
    .strict();

export const NestedEnumApplicantStatusWithAggregatesFilterObjectSchema = Schema;
