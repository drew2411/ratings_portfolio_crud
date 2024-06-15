import { z } from 'zod';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './ProjectApplicationsWhereUniqueInput.schema';
import { ProjectApplicationsUpdateWithoutApplicantInputObjectSchema } from './ProjectApplicationsUpdateWithoutApplicantInput.schema';
import { ProjectApplicationsUncheckedUpdateWithoutApplicantInputObjectSchema } from './ProjectApplicationsUncheckedUpdateWithoutApplicantInput.schema';
import { ProjectApplicationsCreateWithoutApplicantInputObjectSchema } from './ProjectApplicationsCreateWithoutApplicantInput.schema';
import { ProjectApplicationsUncheckedCreateWithoutApplicantInputObjectSchema } from './ProjectApplicationsUncheckedCreateWithoutApplicantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsUpsertWithWhereUniqueWithoutApplicantInput> =
  z
    .object({
      where: z.lazy(() => ProjectApplicationsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => ProjectApplicationsUpdateWithoutApplicantInputObjectSchema
        ),
        z.lazy(
          () =>
            ProjectApplicationsUncheckedUpdateWithoutApplicantInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(
          () => ProjectApplicationsCreateWithoutApplicantInputObjectSchema
        ),
        z.lazy(
          () =>
            ProjectApplicationsUncheckedCreateWithoutApplicantInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectApplicationsUpsertWithWhereUniqueWithoutApplicantInputObjectSchema =
  Schema;
