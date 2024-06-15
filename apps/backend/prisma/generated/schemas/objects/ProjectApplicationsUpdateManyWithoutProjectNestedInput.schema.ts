import { z } from 'zod';
import { ProjectApplicationsCreateWithoutProjectInputObjectSchema } from './ProjectApplicationsCreateWithoutProjectInput.schema';
import { ProjectApplicationsUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectApplicationsUncheckedCreateWithoutProjectInput.schema';
import { ProjectApplicationsCreateOrConnectWithoutProjectInputObjectSchema } from './ProjectApplicationsCreateOrConnectWithoutProjectInput.schema';
import { ProjectApplicationsUpsertWithWhereUniqueWithoutProjectInputObjectSchema } from './ProjectApplicationsUpsertWithWhereUniqueWithoutProjectInput.schema';
import { ProjectApplicationsCreateManyProjectInputEnvelopeObjectSchema } from './ProjectApplicationsCreateManyProjectInputEnvelope.schema';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './ProjectApplicationsWhereUniqueInput.schema';
import { ProjectApplicationsUpdateWithWhereUniqueWithoutProjectInputObjectSchema } from './ProjectApplicationsUpdateWithWhereUniqueWithoutProjectInput.schema';
import { ProjectApplicationsUpdateManyWithWhereWithoutProjectInputObjectSchema } from './ProjectApplicationsUpdateManyWithWhereWithoutProjectInput.schema';
import { ProjectApplicationsScalarWhereInputObjectSchema } from './ProjectApplicationsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsUpdateManyWithoutProjectNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ProjectApplicationsCreateWithoutProjectInputObjectSchema
          ),
          z
            .lazy(
              () => ProjectApplicationsCreateWithoutProjectInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              ProjectApplicationsUncheckedCreateWithoutProjectInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectApplicationsUncheckedCreateWithoutProjectInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ProjectApplicationsCreateOrConnectWithoutProjectInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectApplicationsCreateOrConnectWithoutProjectInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ProjectApplicationsUpsertWithWhereUniqueWithoutProjectInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectApplicationsUpsertWithWhereUniqueWithoutProjectInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => ProjectApplicationsCreateManyProjectInputEnvelopeObjectSchema
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
              ProjectApplicationsUpdateWithWhereUniqueWithoutProjectInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectApplicationsUpdateWithWhereUniqueWithoutProjectInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProjectApplicationsUpdateManyWithWhereWithoutProjectInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectApplicationsUpdateManyWithWhereWithoutProjectInputObjectSchema
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

export const ProjectApplicationsUpdateManyWithoutProjectNestedInputObjectSchema =
  Schema;
