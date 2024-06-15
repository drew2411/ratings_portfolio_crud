import { z } from 'zod';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './ProjectSelectionsWhereUniqueInput.schema';
import { ProjectSelectionsUpdateWithoutProjectInputObjectSchema } from './ProjectSelectionsUpdateWithoutProjectInput.schema';
import { ProjectSelectionsUncheckedUpdateWithoutProjectInputObjectSchema } from './ProjectSelectionsUncheckedUpdateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsUpdateWithWhereUniqueWithoutProjectInput> =
  z
    .object({
      where: z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjectSelectionsUpdateWithoutProjectInputObjectSchema),
        z.lazy(
          () => ProjectSelectionsUncheckedUpdateWithoutProjectInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectSelectionsUpdateWithWhereUniqueWithoutProjectInputObjectSchema =
  Schema;
