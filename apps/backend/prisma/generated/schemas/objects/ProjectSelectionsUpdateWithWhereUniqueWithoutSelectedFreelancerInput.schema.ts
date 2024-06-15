import { z } from 'zod';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './ProjectSelectionsWhereUniqueInput.schema';
import { ProjectSelectionsUpdateWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsUpdateWithoutSelectedFreelancerInput.schema';
import { ProjectSelectionsUncheckedUpdateWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsUncheckedUpdateWithoutSelectedFreelancerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsUpdateWithWhereUniqueWithoutSelectedFreelancerInput> =
  z
    .object({
      where: z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            ProjectSelectionsUpdateWithoutSelectedFreelancerInputObjectSchema
        ),
        z.lazy(
          () =>
            ProjectSelectionsUncheckedUpdateWithoutSelectedFreelancerInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectSelectionsUpdateWithWhereUniqueWithoutSelectedFreelancerInputObjectSchema =
  Schema;
