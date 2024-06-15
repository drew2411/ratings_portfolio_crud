import { z } from 'zod';
import { ProjectApplicationsCreateWithoutProjectInputObjectSchema } from './ProjectApplicationsCreateWithoutProjectInput.schema';
import { ProjectApplicationsUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectApplicationsUncheckedCreateWithoutProjectInput.schema';
import { ProjectApplicationsCreateOrConnectWithoutProjectInputObjectSchema } from './ProjectApplicationsCreateOrConnectWithoutProjectInput.schema';
import { ProjectApplicationsCreateManyProjectInputEnvelopeObjectSchema } from './ProjectApplicationsCreateManyProjectInputEnvelope.schema';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './ProjectApplicationsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsCreateNestedManyWithoutProjectInput> =
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
      createMany: z
        .lazy(
          () => ProjectApplicationsCreateManyProjectInputEnvelopeObjectSchema
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

export const ProjectApplicationsCreateNestedManyWithoutProjectInputObjectSchema =
  Schema;
