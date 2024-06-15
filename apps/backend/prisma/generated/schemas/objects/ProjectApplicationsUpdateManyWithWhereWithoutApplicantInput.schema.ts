import { z } from 'zod';
import { ProjectApplicationsScalarWhereInputObjectSchema } from './ProjectApplicationsScalarWhereInput.schema';
import { ProjectApplicationsUpdateManyMutationInputObjectSchema } from './ProjectApplicationsUpdateManyMutationInput.schema';
import { ProjectApplicationsUncheckedUpdateManyWithoutApplicationsInputObjectSchema } from './ProjectApplicationsUncheckedUpdateManyWithoutApplicationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsUpdateManyWithWhereWithoutApplicantInput> =
  z
    .object({
      where: z.lazy(() => ProjectApplicationsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjectApplicationsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ProjectApplicationsUncheckedUpdateManyWithoutApplicationsInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectApplicationsUpdateManyWithWhereWithoutApplicantInputObjectSchema =
  Schema;
