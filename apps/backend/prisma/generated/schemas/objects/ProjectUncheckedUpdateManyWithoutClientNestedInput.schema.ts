import { z } from 'zod';
import { ProjectCreateWithoutClientInputObjectSchema } from './ProjectCreateWithoutClientInput.schema';
import { ProjectUncheckedCreateWithoutClientInputObjectSchema } from './ProjectUncheckedCreateWithoutClientInput.schema';
import { ProjectCreateOrConnectWithoutClientInputObjectSchema } from './ProjectCreateOrConnectWithoutClientInput.schema';
import { ProjectUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './ProjectUpsertWithWhereUniqueWithoutClientInput.schema';
import { ProjectCreateManyClientInputEnvelopeObjectSchema } from './ProjectCreateManyClientInputEnvelope.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './ProjectUpdateWithWhereUniqueWithoutClientInput.schema';
import { ProjectUpdateManyWithWhereWithoutClientInputObjectSchema } from './ProjectUpdateManyWithWhereWithoutClientInput.schema';
import { ProjectScalarWhereInputObjectSchema } from './ProjectScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUncheckedUpdateManyWithoutClientNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProjectCreateWithoutClientInputObjectSchema),
          z.lazy(() => ProjectCreateWithoutClientInputObjectSchema).array(),
          z.lazy(() => ProjectUncheckedCreateWithoutClientInputObjectSchema),
          z
            .lazy(() => ProjectUncheckedCreateWithoutClientInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProjectCreateOrConnectWithoutClientInputObjectSchema),
          z
            .lazy(() => ProjectCreateOrConnectWithoutClientInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ProjectUpsertWithWhereUniqueWithoutClientInputObjectSchema
          ),
          z
            .lazy(
              () => ProjectUpsertWithWhereUniqueWithoutClientInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProjectCreateManyClientInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ProjectWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProjectWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProjectWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProjectWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ProjectUpdateWithWhereUniqueWithoutClientInputObjectSchema
          ),
          z
            .lazy(
              () => ProjectUpdateWithWhereUniqueWithoutClientInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ProjectUpdateManyWithWhereWithoutClientInputObjectSchema
          ),
          z
            .lazy(
              () => ProjectUpdateManyWithWhereWithoutClientInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProjectScalarWhereInputObjectSchema),
          z.lazy(() => ProjectScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProjectUncheckedUpdateManyWithoutClientNestedInputObjectSchema =
  Schema;
