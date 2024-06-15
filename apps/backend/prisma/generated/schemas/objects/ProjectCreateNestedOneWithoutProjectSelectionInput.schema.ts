import { z } from 'zod';
import { ProjectCreateWithoutProjectSelectionInputObjectSchema } from './ProjectCreateWithoutProjectSelectionInput.schema';
import { ProjectUncheckedCreateWithoutProjectSelectionInputObjectSchema } from './ProjectUncheckedCreateWithoutProjectSelectionInput.schema';
import { ProjectCreateOrConnectWithoutProjectSelectionInputObjectSchema } from './ProjectCreateOrConnectWithoutProjectSelectionInput.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutProjectSelectionInput> =
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
      connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ProjectCreateNestedOneWithoutProjectSelectionInputObjectSchema =
  Schema;
