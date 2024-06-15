import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutProjectSelectionInputObjectSchema } from './ProjectCreateWithoutProjectSelectionInput.schema';
import { ProjectUncheckedCreateWithoutProjectSelectionInputObjectSchema } from './ProjectUncheckedCreateWithoutProjectSelectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutProjectSelectionInput> =
  z
    .object({
      where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProjectCreateWithoutProjectSelectionInputObjectSchema),
        z.lazy(
          () => ProjectUncheckedCreateWithoutProjectSelectionInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectCreateOrConnectWithoutProjectSelectionInputObjectSchema =
  Schema;
