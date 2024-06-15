import { z } from 'zod';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './ProjectApplicationsWhereUniqueInput.schema';
import { ProjectApplicationsUpdateWithoutProjectInputObjectSchema } from './ProjectApplicationsUpdateWithoutProjectInput.schema';
import { ProjectApplicationsUncheckedUpdateWithoutProjectInputObjectSchema } from './ProjectApplicationsUncheckedUpdateWithoutProjectInput.schema';
import { ProjectApplicationsCreateWithoutProjectInputObjectSchema } from './ProjectApplicationsCreateWithoutProjectInput.schema';
import { ProjectApplicationsUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectApplicationsUncheckedCreateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsUpsertWithWhereUniqueWithoutProjectInput> =
  z
    .object({
      where: z.lazy(() => ProjectApplicationsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProjectApplicationsUpdateWithoutProjectInputObjectSchema),
        z.lazy(
          () =>
            ProjectApplicationsUncheckedUpdateWithoutProjectInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => ProjectApplicationsCreateWithoutProjectInputObjectSchema),
        z.lazy(
          () =>
            ProjectApplicationsUncheckedCreateWithoutProjectInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectApplicationsUpsertWithWhereUniqueWithoutProjectInputObjectSchema =
  Schema;
