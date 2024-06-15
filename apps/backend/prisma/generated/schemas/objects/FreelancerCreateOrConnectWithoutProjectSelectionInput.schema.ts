import { z } from 'zod';
import { FreelancerWhereUniqueInputObjectSchema } from './FreelancerWhereUniqueInput.schema';
import { FreelancerCreateWithoutProjectSelectionInputObjectSchema } from './FreelancerCreateWithoutProjectSelectionInput.schema';
import { FreelancerUncheckedCreateWithoutProjectSelectionInputObjectSchema } from './FreelancerUncheckedCreateWithoutProjectSelectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerCreateOrConnectWithoutProjectSelectionInput> =
  z
    .object({
      where: z.lazy(() => FreelancerWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => FreelancerCreateWithoutProjectSelectionInputObjectSchema),
        z.lazy(
          () =>
            FreelancerUncheckedCreateWithoutProjectSelectionInputObjectSchema
        ),
      ]),
    })
    .strict();

export const FreelancerCreateOrConnectWithoutProjectSelectionInputObjectSchema =
  Schema;
