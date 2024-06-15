import { z } from 'zod';
import { ProjectSelectionsScalarWhereInputObjectSchema } from './ProjectSelectionsScalarWhereInput.schema';
import { ProjectSelectionsUpdateManyMutationInputObjectSchema } from './ProjectSelectionsUpdateManyMutationInput.schema';
import { ProjectSelectionsUncheckedUpdateManyWithoutProjectSelectionInputObjectSchema } from './ProjectSelectionsUncheckedUpdateManyWithoutProjectSelectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsUpdateManyWithWhereWithoutSelectedFreelancerInput> =
  z
    .object({
      where: z.lazy(() => ProjectSelectionsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjectSelectionsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ProjectSelectionsUncheckedUpdateManyWithoutProjectSelectionInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectSelectionsUpdateManyWithWhereWithoutSelectedFreelancerInputObjectSchema =
  Schema;
