import { z } from 'zod';
import { ProjectSelectionsCreateWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsCreateWithoutSelectedFreelancerInput.schema';
import { ProjectSelectionsUncheckedCreateWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsUncheckedCreateWithoutSelectedFreelancerInput.schema';
import { ProjectSelectionsCreateOrConnectWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsCreateOrConnectWithoutSelectedFreelancerInput.schema';
import { ProjectSelectionsUpsertWithWhereUniqueWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsUpsertWithWhereUniqueWithoutSelectedFreelancerInput.schema';
import { ProjectSelectionsCreateManySelectedFreelancerInputEnvelopeObjectSchema } from './ProjectSelectionsCreateManySelectedFreelancerInputEnvelope.schema';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './ProjectSelectionsWhereUniqueInput.schema';
import { ProjectSelectionsUpdateWithWhereUniqueWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsUpdateWithWhereUniqueWithoutSelectedFreelancerInput.schema';
import { ProjectSelectionsUpdateManyWithWhereWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsUpdateManyWithWhereWithoutSelectedFreelancerInput.schema';
import { ProjectSelectionsScalarWhereInputObjectSchema } from './ProjectSelectionsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsUpdateManyWithoutSelectedFreelancerNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              ProjectSelectionsCreateWithoutSelectedFreelancerInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectSelectionsCreateWithoutSelectedFreelancerInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              ProjectSelectionsUncheckedCreateWithoutSelectedFreelancerInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectSelectionsUncheckedCreateWithoutSelectedFreelancerInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ProjectSelectionsCreateOrConnectWithoutSelectedFreelancerInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectSelectionsCreateOrConnectWithoutSelectedFreelancerInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ProjectSelectionsUpsertWithWhereUniqueWithoutSelectedFreelancerInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectSelectionsUpsertWithWhereUniqueWithoutSelectedFreelancerInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            ProjectSelectionsCreateManySelectedFreelancerInputEnvelopeObjectSchema
        )
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
              ProjectSelectionsUpdateWithWhereUniqueWithoutSelectedFreelancerInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectSelectionsUpdateWithWhereUniqueWithoutSelectedFreelancerInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProjectSelectionsUpdateManyWithWhereWithoutSelectedFreelancerInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ProjectSelectionsUpdateManyWithWhereWithoutSelectedFreelancerInputObjectSchema
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

export const ProjectSelectionsUpdateManyWithoutSelectedFreelancerNestedInputObjectSchema =
  Schema;
