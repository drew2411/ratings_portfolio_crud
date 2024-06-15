import { z } from 'zod';
import { ApplicantStatusSchema } from '../enums/ApplicantStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumApplicantStatusFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => ApplicantStatusSchema).optional(),
    })
    .strict();

export const EnumApplicantStatusFieldUpdateOperationsInputObjectSchema = Schema;
