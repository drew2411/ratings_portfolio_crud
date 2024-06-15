import { z } from 'zod';
import { ProjectApplicationsCreateWithoutApplicantInputObjectSchema } from './ProjectApplicationsCreateWithoutApplicantInput.schema';
import { ProjectApplicationsUncheckedCreateWithoutApplicantInputObjectSchema } from './ProjectApplicationsUncheckedCreateWithoutApplicantInput.schema';
import { ProjectApplicationsCreateOrConnectWithoutApplicantInputObjectSchema } from './ProjectApplicationsCreateOrConnectWithoutApplicantInput.schema';
import { ProjectApplicationsCreateManyApplicantInputEnvelopeObjectSchema } from './ProjectApplicationsCreateManyApplicantInputEnvelope.schema';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './ProjectApplicationsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsCreateNestedManyWithoutApplicantInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ProjectApplicationsCreateWithoutApplicantInputObjectSchema
          ),
          z
            .lazy(
              () => ProjectApplicationsCreateWithoutApplicantInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              ProjectApplicationsUncheckedCreateWithoutApplicantInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectApplicationsUncheckedCreateWithoutApplicantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ProjectApplicationsCreateOrConnectWithoutApplicantInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectApplicationsCreateOrConnectWithoutApplicantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => ProjectApplicationsCreateManyApplicantInputEnvelopeObjectSchema
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProjectApplicationsWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectApplicationsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProjectApplicationsCreateNestedManyWithoutApplicantInputObjectSchema =
  Schema;
