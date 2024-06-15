import { z } from 'zod';
import { ProjectSelectionsCreateWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsCreateWithoutSelectedFreelancerInput.schema';
import { ProjectSelectionsUncheckedCreateWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsUncheckedCreateWithoutSelectedFreelancerInput.schema';
import { ProjectSelectionsCreateOrConnectWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsCreateOrConnectWithoutSelectedFreelancerInput.schema';
import { ProjectSelectionsCreateManySelectedFreelancerInputEnvelopeObjectSchema } from './ProjectSelectionsCreateManySelectedFreelancerInputEnvelope.schema';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './ProjectSelectionsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsUncheckedCreateNestedManyWithoutSelectedFreelancerInput> =
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
      createMany: z
        .lazy(
          () =>
            ProjectSelectionsCreateManySelectedFreelancerInputEnvelopeObjectSchema
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema),
          z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProjectSelectionsUncheckedCreateNestedManyWithoutSelectedFreelancerInputObjectSchema =
  Schema;
