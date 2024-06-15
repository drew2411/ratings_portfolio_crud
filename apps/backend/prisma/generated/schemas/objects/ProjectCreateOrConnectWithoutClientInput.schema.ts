import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutClientInputObjectSchema } from './ProjectCreateWithoutClientInput.schema';
import { ProjectUncheckedCreateWithoutClientInputObjectSchema } from './ProjectUncheckedCreateWithoutClientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutClientInput> = z
  .object({
    where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutClientInputObjectSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutClientInputObjectSchema),
    ]),
  })
  .strict();

export const ProjectCreateOrConnectWithoutClientInputObjectSchema = Schema;
