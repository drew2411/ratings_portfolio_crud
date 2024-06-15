import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutApplicationsInputObjectSchema } from './ProjectCreateWithoutApplicationsInput.schema';
import { ProjectUncheckedCreateWithoutApplicationsInputObjectSchema } from './ProjectUncheckedCreateWithoutApplicationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutApplicationsInput> =
  z
    .object({
      where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProjectCreateWithoutApplicationsInputObjectSchema),
        z.lazy(
          () => ProjectUncheckedCreateWithoutApplicationsInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ProjectCreateOrConnectWithoutApplicationsInputObjectSchema =
  Schema;
