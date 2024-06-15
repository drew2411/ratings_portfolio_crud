import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutClientInputObjectSchema } from './ProjectUpdateWithoutClientInput.schema';
import { ProjectUncheckedUpdateWithoutClientInputObjectSchema } from './ProjectUncheckedUpdateWithoutClientInput.schema';
import { ProjectCreateWithoutClientInputObjectSchema } from './ProjectCreateWithoutClientInput.schema';
import { ProjectUncheckedCreateWithoutClientInputObjectSchema } from './ProjectUncheckedCreateWithoutClientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpsertWithWhereUniqueWithoutClientInput> =
  z
    .object({
      where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProjectUpdateWithoutClientInputObjectSchema),
        z.lazy(() => ProjectUncheckedUpdateWithoutClientInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProjectCreateWithoutClientInputObjectSchema),
        z.lazy(() => ProjectUncheckedCreateWithoutClientInputObjectSchema),
      ]),
    })
    .strict();

export const ProjectUpsertWithWhereUniqueWithoutClientInputObjectSchema =
  Schema;
