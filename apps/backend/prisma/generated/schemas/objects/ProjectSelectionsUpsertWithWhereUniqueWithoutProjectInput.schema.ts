import { z } from 'zod';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './ProjectSelectionsWhereUniqueInput.schema';
import { ProjectSelectionsUpdateWithoutProjectInputObjectSchema } from './ProjectSelectionsUpdateWithoutProjectInput.schema';
import { ProjectSelectionsUncheckedUpdateWithoutProjectInputObjectSchema } from './ProjectSelectionsUncheckedUpdateWithoutProjectInput.schema';
import { ProjectSelectionsCreateWithoutProjectInputObjectSchema } from './ProjectSelectionsCreateWithoutProjectInput.schema';
import { ProjectSelectionsUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectSelectionsUncheckedCreateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsUpsertWithWhereUniqueWithoutProjectInput> =
  z
    .object({
      where: z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProjectSelectionsUpdateWithoutProjectInputObjectSchema),
        z.lazy(
          () => ProjectSelectionsUncheckedUpdateWithoutProjectInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => ProjectSelectionsCreateWithoutProjectInputObjectSchema),
        z.lazy(
          () => ProjectSelectionsUncheckedCreateWithoutProjectInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectSelectionsUpsertWithWhereUniqueWithoutProjectInputObjectSchema =
  Schema;
