import { z } from 'zod';
import { ProjectSelectionsCreateWithoutProjectInputObjectSchema } from './ProjectSelectionsCreateWithoutProjectInput.schema';
import { ProjectSelectionsUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectSelectionsUncheckedCreateWithoutProjectInput.schema';
import { ProjectSelectionsCreateOrConnectWithoutProjectInputObjectSchema } from './ProjectSelectionsCreateOrConnectWithoutProjectInput.schema';
import { ProjectSelectionsUpsertWithWhereUniqueWithoutProjectInputObjectSchema } from './ProjectSelectionsUpsertWithWhereUniqueWithoutProjectInput.schema';
import { ProjectSelectionsCreateManyProjectInputEnvelopeObjectSchema } from './ProjectSelectionsCreateManyProjectInputEnvelope.schema';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './ProjectSelectionsWhereUniqueInput.schema';
import { ProjectSelectionsUpdateWithWhereUniqueWithoutProjectInputObjectSchema } from './ProjectSelectionsUpdateWithWhereUniqueWithoutProjectInput.schema';
import { ProjectSelectionsUpdateManyWithWhereWithoutProjectInputObjectSchema } from './ProjectSelectionsUpdateManyWithWhereWithoutProjectInput.schema';
import { ProjectSelectionsScalarWhereInputObjectSchema } from './ProjectSelectionsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsUpdateManyWithoutProjectNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProjectSelectionsCreateWithoutProjectInputObjectSchema),
          z
            .lazy(() => ProjectSelectionsCreateWithoutProjectInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              ProjectSelectionsUncheckedCreateWithoutProjectInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectSelectionsUncheckedCreateWithoutProjectInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ProjectSelectionsCreateOrConnectWithoutProjectInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectSelectionsCreateOrConnectWithoutProjectInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ProjectSelectionsUpsertWithWhereUniqueWithoutProjectInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectSelectionsUpsertWithWhereUniqueWithoutProjectInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProjectSelectionsCreateManyProjectInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ProjectSelectionsUpdateWithWhereUniqueWithoutProjectInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectSelectionsUpdateWithWhereUniqueWithoutProjectInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProjectSelectionsUpdateManyWithWhereWithoutProjectInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectSelectionsUpdateManyWithWhereWithoutProjectInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProjectSelectionsScalarWhereInputObjectSchema),
          z.lazy(() => ProjectSelectionsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProjectSelectionsUpdateManyWithoutProjectNestedInputObjectSchema =
  Schema;
