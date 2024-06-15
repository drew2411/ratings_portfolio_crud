import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutClientInputObjectSchema } from './ProjectUpdateWithoutClientInput.schema';
import { ProjectUncheckedUpdateWithoutClientInputObjectSchema } from './ProjectUncheckedUpdateWithoutClientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpdateWithWhereUniqueWithoutClientInput> =
  z
    .object({
      where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjectUpdateWithoutClientInputObjectSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutClientInputObjectSchema),
      ]),
    })
    .strict();

export const ProjectUpdateWithWhereUniqueWithoutClientInputObjectSchema =
  Schema;
