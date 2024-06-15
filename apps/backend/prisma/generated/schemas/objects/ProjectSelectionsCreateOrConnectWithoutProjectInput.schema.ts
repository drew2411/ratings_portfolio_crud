import { z } from 'zod';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './ProjectSelectionsWhereUniqueInput.schema';
import { ProjectSelectionsCreateWithoutProjectInputObjectSchema } from './ProjectSelectionsCreateWithoutProjectInput.schema';
import { ProjectSelectionsUncheckedCreateWithoutProjectInputObjectSchema } from './ProjectSelectionsUncheckedCreateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsCreateOrConnectWithoutProjectInput> =
  z
    .object({
      where: z.lazy(() => ProjectSelectionsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProjectSelectionsCreateWithoutProjectInputObjectSchema),
        z.lazy(
          () => ProjectSelectionsUncheckedCreateWithoutProjectInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectSelectionsCreateOrConnectWithoutProjectInputObjectSchema =
  Schema;
