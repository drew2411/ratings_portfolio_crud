import { z } from 'zod';
import { FreelancerUpdateWithoutApplicationsInputObjectSchema } from './FreelancerUpdateWithoutApplicationsInput.schema';
import { FreelancerUncheckedUpdateWithoutApplicationsInputObjectSchema } from './FreelancerUncheckedUpdateWithoutApplicationsInput.schema';
import { FreelancerCreateWithoutApplicationsInputObjectSchema } from './FreelancerCreateWithoutApplicationsInput.schema';
import { FreelancerUncheckedCreateWithoutApplicationsInputObjectSchema } from './FreelancerUncheckedCreateWithoutApplicationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerUpsertWithoutApplicationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => FreelancerUpdateWithoutApplicationsInputObjectSchema),
      z.lazy(
        () => FreelancerUncheckedUpdateWithoutApplicationsInputObjectSchema
      ),
    ]),
    create: z.union([
      z.lazy(() => FreelancerCreateWithoutApplicationsInputObjectSchema),
      z.lazy(
        () => FreelancerUncheckedCreateWithoutApplicationsInputObjectSchema
      ),
    ]),
  })
  .strict();

export const FreelancerUpsertWithoutApplicationsInputObjectSchema = Schema;
