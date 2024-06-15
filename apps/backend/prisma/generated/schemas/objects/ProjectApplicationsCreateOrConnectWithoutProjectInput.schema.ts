import { z } from 'zod';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './ProjectApplicationsWhereUniqueInput.schema';
import { ProjectApplicationsCreateWithoutProjectInputObjectSchema } from './ProjectApplicationsCreateWithoutProjectInput.schema';
import { ProjectApplicationsUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectApplicationsUncheckedCreateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsCreateOrConnectWithoutProjectInput> =
  z
    .object({
      where: z.lazy(() => ProjectApplicationsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProjectApplicationsCreateWithoutProjectInputObjectSchema),
        z.lazy(
          () =>
            ProjectApplicationsUncheckedCreateWithoutProjectInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectApplicationsCreateOrConnectWithoutProjectInputObjectSchema =
  Schema;
