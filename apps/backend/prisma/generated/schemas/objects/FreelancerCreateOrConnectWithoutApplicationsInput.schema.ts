import { z } from 'zod';
import { FreelancerWhereUniqueInputObjectSchema } from './FreelancerWhereUniqueInput.schema';
import { FreelancerCreateWithoutApplicationsInputObjectSchema } from './FreelancerCreateWithoutApplicationsInput.schema';
import { FreelancerUncheckedCreateWithoutApplicationsInputObjectSchema } from './FreelancerUncheckedCreateWithoutApplicationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerCreateOrConnectWithoutApplicationsInput> =
  z
    .object({
      where: z.lazy(() => FreelancerWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => FreelancerCreateWithoutApplicationsInputObjectSchema),
        z.lazy(
          () => FreelancerUncheckedCreateWithoutApplicationsInputObjectSchema
        ),
      ]),
    })
    .strict();

export const FreelancerCreateOrConnectWithoutApplicationsInputObjectSchema =
  Schema;
