import { z } from 'zod';
import { ProjectUpdateWithoutApplicationsInputObjectSchema } from './ProjectUpdateWithoutApplicationsInput.schema';
import { ProjectUncheckedUpdateWithoutApplicationsInputObjectSchema } from './ProjectUncheckedUpdateWithoutApplicationsInput.schema';
import { ProjectCreateWithoutApplicationsInputObjectSchema } from './ProjectCreateWithoutApplicationsInput.schema';
import { ProjectUncheckedCreateWithoutApplicationsInputObjectSchema } from './ProjectUncheckedCreateWithoutApplicationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpsertWithoutApplicationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProjectUpdateWithoutApplicationsInputObjectSchema),
      z.lazy(() => ProjectUncheckedUpdateWithoutApplicationsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutApplicationsInputObjectSchema),
      z.lazy(() => ProjectUncheckedCreateWithoutApplicationsInputObjectSchema),
    ]),
  })
  .strict();

export const ProjectUpsertWithoutApplicationsInputObjectSchema = Schema;
