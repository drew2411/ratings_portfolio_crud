import { z } from 'zod';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './ProjectSelectionsWhereUniqueInput.schema';
import { ProjectSelectionsUpdateWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsUpdateWithoutSelectedFreelancerInput.schema';
import { ProjectSelectionsUncheckedUpdateWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsUncheckedUpdateWithoutSelectedFreelancerInput.schema';
import { ProjectSelectionsCreateWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsCreateWithoutSelectedFreelancerInput.schema';
import { ProjectSelectionsUncheckedCreateWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsUncheckedCreateWithoutSelectedFreelancerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsUpsertWithWhereUniqueWithoutSelectedFreelancerInput> =
  z
    .object({
      where: z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            ProjectSelectionsUpdateWithoutSelectedFreelancerInputObjectSchema
        ),
        z.lazy(
          () =>
            ProjectSelectionsUncheckedUpdateWithoutSelectedFreelancerInputObjectSchema
        ),
      ]),
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

export const ProjectSelectionsUpsertWithWhereUniqueWithoutSelectedFreelancerInputObjectSchema =
  Schema;
