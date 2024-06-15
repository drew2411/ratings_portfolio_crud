import { z } from 'zod';
import { ProjectCreateWithoutProjectSelectionInputObjectSchema } from './ProjectCreateWithoutProjectSelectionInput.schema';
import { ProjectUncheckedCreateWithoutProjectSelectionInputObjectSchema } from './ProjectUncheckedCreateWithoutProjectSelectionInput.schema';
import { ProjectCreateOrConnectWithoutProjectSelectionInputObjectSchema } from './ProjectCreateOrConnectWithoutProjectSelectionInput.schema';
import { ProjectUpsertWithoutProjectSelectionInputObjectSchema } from './ProjectUpsertWithoutProjectSelectionInput.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutProjectSelectionInputObjectSchema } from './ProjectUpdateWithoutProjectSelectionInput.schema';
import { ProjectUncheckedUpdateWithoutProjectSelectionInputObjectSchema } from './ProjectUncheckedUpdateWithoutProjectSelectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutProjectSelectionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProjectCreateWithoutProjectSelectionInputObjectSchema),
          z.lazy(
            () => ProjectUncheckedCreateWithoutProjectSelectionInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ProjectCreateOrConnectWithoutProjectSelectionInputObjectSchema
        )
        .optional(),
      upsert: z
        .lazy(() => ProjectUpsertWithoutProjectSelectionInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProjectUpdateWithoutProjectSelectionInputObjectSchema),
          z.lazy(
            () => ProjectUncheckedUpdateWithoutProjectSelectionInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const ProjectUpdateOneRequiredWithoutProjectSelectionNestedInputObjectSchema =
  Schema;
