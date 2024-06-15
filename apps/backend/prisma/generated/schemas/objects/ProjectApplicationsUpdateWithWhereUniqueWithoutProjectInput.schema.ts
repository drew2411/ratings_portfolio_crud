import { z } from 'zod';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './ProjectApplicationsWhereUniqueInput.schema';
import { ProjectApplicationsUpdateWithoutProjectInputObjectSchema } from './ProjectApplicationsUpdateWithoutProjectInput.schema';
import { ProjectApplicationsUncheckedUpdateWithoutProjectInputObjectSchema } from './ProjectApplicationsUncheckedUpdateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsUpdateWithWhereUniqueWithoutProjectInput> =
  z
    .object({
      where: z.lazy(() => ProjectApplicationsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjectApplicationsUpdateWithoutProjectInputObjectSchema),
        z.lazy(
          () =>
            ProjectApplicationsUncheckedUpdateWithoutProjectInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectApplicationsUpdateWithWhereUniqueWithoutProjectInputObjectSchema =
  Schema;
