import { z } from 'zod';
import { FreelancerUpdateWithoutProjectSelectionInputObjectSchema } from './FreelancerUpdateWithoutProjectSelectionInput.schema';
import { FreelancerUncheckedUpdateWithoutProjectSelectionInputObjectSchema } from './FreelancerUncheckedUpdateWithoutProjectSelectionInput.schema';
import { FreelancerCreateWithoutProjectSelectionInputObjectSchema } from './FreelancerCreateWithoutProjectSelectionInput.schema';
import { FreelancerUncheckedCreateWithoutProjectSelectionInputObjectSchema } from './FreelancerUncheckedCreateWithoutProjectSelectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerUpsertWithoutProjectSelectionInput> = z
  .object({
    update: z.union([
      z.lazy(() => FreelancerUpdateWithoutProjectSelectionInputObjectSchema),
      z.lazy(
        () => FreelancerUncheckedUpdateWithoutProjectSelectionInputObjectSchema
      ),
    ]),
    create: z.union([
      z.lazy(() => FreelancerCreateWithoutProjectSelectionInputObjectSchema),
      z.lazy(
        () => FreelancerUncheckedCreateWithoutProjectSelectionInputObjectSchema
      ),
    ]),
  })
  .strict();

export const FreelancerUpsertWithoutProjectSelectionInputObjectSchema = Schema;
