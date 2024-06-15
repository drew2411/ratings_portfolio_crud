import { z } from 'zod';
import { FreelancerCreateWithoutApplicationsInputObjectSchema } from './FreelancerCreateWithoutApplicationsInput.schema';
import { FreelancerUncheckedCreateWithoutApplicationsInputObjectSchema } from './FreelancerUncheckedCreateWithoutApplicationsInput.schema';
import { FreelancerCreateOrConnectWithoutApplicationsInputObjectSchema } from './FreelancerCreateOrConnectWithoutApplicationsInput.schema';
import { FreelancerUpsertWithoutApplicationsInputObjectSchema } from './FreelancerUpsertWithoutApplicationsInput.schema';
import { FreelancerWhereUniqueInputObjectSchema } from './FreelancerWhereUniqueInput.schema';
import { FreelancerUpdateWithoutApplicationsInputObjectSchema } from './FreelancerUpdateWithoutApplicationsInput.schema';
import { FreelancerUncheckedUpdateWithoutApplicationsInputObjectSchema } from './FreelancerUncheckedUpdateWithoutApplicationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerUpdateOneRequiredWithoutApplicationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FreelancerCreateWithoutApplicationsInputObjectSchema),
          z.lazy(
            () => FreelancerUncheckedCreateWithoutApplicationsInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => FreelancerCreateOrConnectWithoutApplicationsInputObjectSchema
        )
        .optional(),
      upsert: z
        .lazy(() => FreelancerUpsertWithoutApplicationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => FreelancerWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => FreelancerUpdateWithoutApplicationsInputObjectSchema),
          z.lazy(
            () => FreelancerUncheckedUpdateWithoutApplicationsInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const FreelancerUpdateOneRequiredWithoutApplicationsNestedInputObjectSchema =
  Schema;
