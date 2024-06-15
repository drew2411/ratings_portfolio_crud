import { z } from 'zod';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './ProjectSelectionsWhereUniqueInput.schema';
import { ProjectSelectionsCreateWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsCreateWithoutSelectedFreelancerInput.schema';
import { ProjectSelectionsUncheckedCreateWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsUncheckedCreateWithoutSelectedFreelancerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsCreateOrConnectWithoutSelectedFreelancerInput> =
  z
    .object({
      where: z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            ProjectSelectionsCreateWithoutSelectedFreelancerInputObjectSchema
        ),
        z.lazy(
          () =>
            ProjectSelectionsUncheckedCreateWithoutSelectedFreelancerInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectSelectionsCreateOrConnectWithoutSelectedFreelancerInputObjectSchema =
  Schema;
