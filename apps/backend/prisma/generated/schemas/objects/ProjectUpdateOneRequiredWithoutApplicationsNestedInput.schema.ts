import { z } from 'zod';
import { ProjectCreateWithoutApplicationsInputObjectSchema } from './ProjectCreateWithoutApplicationsInput.schema';
import { ProjectUncheckedCreateWithoutApplicationsInputObjectSchema } from './ProjectUncheckedCreateWithoutApplicationsInput.schema';
import { ProjectCreateOrConnectWithoutApplicationsInputObjectSchema } from './ProjectCreateOrConnectWithoutApplicationsInput.schema';
import { ProjectUpsertWithoutApplicationsInputObjectSchema } from './ProjectUpsertWithoutApplicationsInput.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutApplicationsInputObjectSchema } from './ProjectUpdateWithoutApplicationsInput.schema';
import { ProjectUncheckedUpdateWithoutApplicationsInputObjectSchema } from './ProjectUncheckedUpdateWithoutApplicationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutApplicationsNestedInput> =
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
      upsert: z
        .lazy(() => ProjectUpsertWithoutApplicationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProjectUpdateWithoutApplicationsInputObjectSchema),
          z.lazy(
            () => ProjectUncheckedUpdateWithoutApplicationsInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const ProjectUpdateOneRequiredWithoutApplicationsNestedInputObjectSchema =
  Schema;
