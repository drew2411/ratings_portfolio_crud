import { z } from 'zod';
import { ProjectApplicationsCreateWithoutApplicantInputObjectSchema } from './ProjectApplicationsCreateWithoutApplicantInput.schema';
import { ProjectApplicationsUncheckedCreateWithoutApplicantInputObjectSchema } from './ProjectApplicationsUncheckedCreateWithoutApplicantInput.schema';
import { ProjectApplicationsCreateOrConnectWithoutApplicantInputObjectSchema } from './ProjectApplicationsCreateOrConnectWithoutApplicantInput.schema';
import { ProjectApplicationsUpsertWithWhereUniqueWithoutApplicantInputObjectSchema } from './ProjectApplicationsUpsertWithWhereUniqueWithoutApplicantInput.schema';
import { ProjectApplicationsCreateManyApplicantInputEnvelopeObjectSchema } from './ProjectApplicationsCreateManyApplicantInputEnvelope.schema';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './ProjectApplicationsWhereUniqueInput.schema';
import { ProjectApplicationsUpdateWithWhereUniqueWithoutApplicantInputObjectSchema } from './ProjectApplicationsUpdateWithWhereUniqueWithoutApplicantInput.schema';
import { ProjectApplicationsUpdateManyWithWhereWithoutApplicantInputObjectSchema } from './ProjectApplicationsUpdateManyWithWhereWithoutApplicantInput.schema';
import { ProjectApplicationsScalarWhereInputObjectSchema } from './ProjectApplicationsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsUncheckedUpdateManyWithoutApplicantNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ProjectApplicationsUpsertWithWhereUniqueWithoutApplicantInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectApplicationsUpsertWithWhereUniqueWithoutApplicantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => ProjectApplicationsCreateManyApplicantInputEnvelopeObjectSchema
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => ProjectApplicationsWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectApplicationsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProjectApplicationsWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectApplicationsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProjectApplicationsWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectApplicationsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProjectApplicationsWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectApplicationsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ProjectApplicationsUpdateWithWhereUniqueWithoutApplicantInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectApplicationsUpdateWithWhereUniqueWithoutApplicantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProjectApplicationsUpdateManyWithWhereWithoutApplicantInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectApplicationsUpdateManyWithWhereWithoutApplicantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProjectApplicationsScalarWhereInputObjectSchema),
          z.lazy(() => ProjectApplicationsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProjectApplicationsUncheckedUpdateManyWithoutApplicantNestedInputObjectSchema =
  Schema;
