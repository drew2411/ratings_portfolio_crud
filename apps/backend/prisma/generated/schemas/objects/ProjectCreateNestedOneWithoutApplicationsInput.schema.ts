import { z } from 'zod';
import { ProjectCreateWithoutApplicationsInputObjectSchema } from './ProjectCreateWithoutApplicationsInput.schema';
import { ProjectUncheckedCreateWithoutApplicationsInputObjectSchema } from './ProjectUncheckedCreateWithoutApplicationsInput.schema';
import { ProjectCreateOrConnectWithoutApplicationsInputObjectSchema } from './ProjectCreateOrConnectWithoutApplicationsInput.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutApplicationsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProjectCreateWithoutApplicationsInputObjectSchema),
          z.lazy(
            () => ProjectUncheckedCreateWithoutApplicationsInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProjectCreateOrConnectWithoutApplicationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ProjectCreateNestedOneWithoutApplicationsInputObjectSchema =
  Schema;
