import { z } from 'zod';
import { ProjectCreateWithoutClientInputObjectSchema } from './ProjectCreateWithoutClientInput.schema';
import { ProjectUncheckedCreateWithoutClientInputObjectSchema } from './ProjectUncheckedCreateWithoutClientInput.schema';
import { ProjectCreateOrConnectWithoutClientInputObjectSchema } from './ProjectCreateOrConnectWithoutClientInput.schema';
import { ProjectCreateManyClientInputEnvelopeObjectSchema } from './ProjectCreateManyClientInputEnvelope.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateNestedManyWithoutClientInput> = z
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
    createMany: z
      .lazy(() => ProjectCreateManyClientInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjectWhereUniqueInputObjectSchema),
        z.lazy(() => ProjectWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ProjectCreateNestedManyWithoutClientInputObjectSchema = Schema;
