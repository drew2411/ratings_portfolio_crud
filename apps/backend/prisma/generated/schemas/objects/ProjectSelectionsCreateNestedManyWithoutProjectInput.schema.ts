import { z } from 'zod';
import { ProjectSelectionsCreateWithoutProjectInputObjectSchema } from './ProjectSelectionsCreateWithoutProjectInput.schema';
import { ProjectSelectionsUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectSelectionsUncheckedCreateWithoutProjectInput.schema';
import { ProjectSelectionsCreateOrConnectWithoutProjectInputObjectSchema } from './ProjectSelectionsCreateOrConnectWithoutProjectInput.schema';
import { ProjectSelectionsCreateManyProjectInputEnvelopeObjectSchema } from './ProjectSelectionsCreateManyProjectInputEnvelope.schema';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './ProjectSelectionsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsCreateNestedManyWithoutProjectInput> =
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
      createMany: z
        .lazy(() => ProjectSelectionsCreateManyProjectInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProjectSelectionsCreateNestedManyWithoutProjectInputObjectSchema =
  Schema;
