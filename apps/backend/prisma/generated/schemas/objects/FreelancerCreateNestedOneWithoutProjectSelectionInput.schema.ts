import { z } from 'zod';
import { FreelancerCreateWithoutProjectSelectionInputObjectSchema } from './FreelancerCreateWithoutProjectSelectionInput.schema';
import { FreelancerUncheckedCreateWithoutProjectSelectionInputObjectSchema } from './FreelancerUncheckedCreateWithoutProjectSelectionInput.schema';
import { FreelancerCreateOrConnectWithoutProjectSelectionInputObjectSchema } from './FreelancerCreateOrConnectWithoutProjectSelectionInput.schema';
import { FreelancerWhereUniqueInputObjectSchema } from './FreelancerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerCreateNestedOneWithoutProjectSelectionInput> =
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
      connect: z.lazy(() => FreelancerWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const FreelancerCreateNestedOneWithoutProjectSelectionInputObjectSchema =
  Schema;
