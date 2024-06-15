import { z } from 'zod';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './ProjectApplicationsWhereUniqueInput.schema';
import { ProjectApplicationsUpdateWithoutApplicantInputObjectSchema } from './ProjectApplicationsUpdateWithoutApplicantInput.schema';
import { ProjectApplicationsUncheckedUpdateWithoutApplicantInputObjectSchema } from './ProjectApplicationsUncheckedUpdateWithoutApplicantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsUpdateWithWhereUniqueWithoutApplicantInput> =
  z
    .object({
      where: z.lazy(() => ProjectApplicationsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => ProjectApplicationsUpdateWithoutApplicantInputObjectSchema
        ),
        z.lazy(
          () =>
            ProjectApplicationsUncheckedUpdateWithoutApplicantInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectApplicationsUpdateWithWhereUniqueWithoutApplicantInputObjectSchema =
  Schema;
