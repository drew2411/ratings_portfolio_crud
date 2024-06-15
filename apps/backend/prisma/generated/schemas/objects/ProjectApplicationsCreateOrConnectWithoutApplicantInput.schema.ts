import { z } from 'zod';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './ProjectApplicationsWhereUniqueInput.schema';
import { ProjectApplicationsCreateWithoutApplicantInputObjectSchema } from './ProjectApplicationsCreateWithoutApplicantInput.schema';
import { ProjectApplicationsUncheckedCreateWithoutApplicantInputObjectSchema } from './ProjectApplicationsUncheckedCreateWithoutApplicantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsCreateOrConnectWithoutApplicantInput> =
  z
    .object({
      where: z.lazy(() => ProjectApplicationsWhereUniqueInputObjectSchema),
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

export const ProjectApplicationsCreateOrConnectWithoutApplicantInputObjectSchema =
  Schema;
