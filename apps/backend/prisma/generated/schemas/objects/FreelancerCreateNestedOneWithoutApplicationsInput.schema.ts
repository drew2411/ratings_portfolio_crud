import { z } from 'zod';
import { FreelancerCreateWithoutApplicationsInputObjectSchema } from './FreelancerCreateWithoutApplicationsInput.schema';
import { FreelancerUncheckedCreateWithoutApplicationsInputObjectSchema } from './FreelancerUncheckedCreateWithoutApplicationsInput.schema';
import { FreelancerCreateOrConnectWithoutApplicationsInputObjectSchema } from './FreelancerCreateOrConnectWithoutApplicationsInput.schema';
import { FreelancerWhereUniqueInputObjectSchema } from './FreelancerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerCreateNestedOneWithoutApplicationsInput> =
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
      connect: z.lazy(() => FreelancerWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const FreelancerCreateNestedOneWithoutApplicationsInputObjectSchema =
  Schema;
