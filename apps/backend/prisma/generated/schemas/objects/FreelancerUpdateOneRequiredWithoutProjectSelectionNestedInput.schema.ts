import { z } from 'zod';
import { FreelancerCreateWithoutProjectSelectionInputObjectSchema } from './FreelancerCreateWithoutProjectSelectionInput.schema';
import { FreelancerUncheckedCreateWithoutProjectSelectionInputObjectSchema } from './FreelancerUncheckedCreateWithoutProjectSelectionInput.schema';
import { FreelancerCreateOrConnectWithoutProjectSelectionInputObjectSchema } from './FreelancerCreateOrConnectWithoutProjectSelectionInput.schema';
import { FreelancerUpsertWithoutProjectSelectionInputObjectSchema } from './FreelancerUpsertWithoutProjectSelectionInput.schema';
import { FreelancerWhereUniqueInputObjectSchema } from './FreelancerWhereUniqueInput.schema';
import { FreelancerUpdateWithoutProjectSelectionInputObjectSchema } from './FreelancerUpdateWithoutProjectSelectionInput.schema';
import { FreelancerUncheckedUpdateWithoutProjectSelectionInputObjectSchema } from './FreelancerUncheckedUpdateWithoutProjectSelectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerUpdateOneRequiredWithoutProjectSelectionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => FreelancerCreateWithoutProjectSelectionInputObjectSchema
          ),
          z.lazy(
            () =>
              FreelancerUncheckedCreateWithoutProjectSelectionInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            FreelancerCreateOrConnectWithoutProjectSelectionInputObjectSchema
        )
        .optional(),
      upsert: z
        .lazy(() => FreelancerUpsertWithoutProjectSelectionInputObjectSchema)
        .optional(),
      connect: z.lazy(() => FreelancerWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => FreelancerUpdateWithoutProjectSelectionInputObjectSchema
          ),
          z.lazy(
            () =>
              FreelancerUncheckedUpdateWithoutProjectSelectionInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const FreelancerUpdateOneRequiredWithoutProjectSelectionNestedInputObjectSchema =
  Schema;
