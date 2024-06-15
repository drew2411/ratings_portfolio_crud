import { z } from 'zod';
import { ProjectUpdateWithoutProjectSelectionInputObjectSchema } from './ProjectUpdateWithoutProjectSelectionInput.schema';
import { ProjectUncheckedUpdateWithoutProjectSelectionInputObjectSchema } from './ProjectUncheckedUpdateWithoutProjectSelectionInput.schema';
import { ProjectCreateWithoutProjectSelectionInputObjectSchema } from './ProjectCreateWithoutProjectSelectionInput.schema';
import { ProjectUncheckedCreateWithoutProjectSelectionInputObjectSchema } from './ProjectUncheckedCreateWithoutProjectSelectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpsertWithoutProjectSelectionInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProjectUpdateWithoutProjectSelectionInputObjectSchema),
      z.lazy(
        () => ProjectUncheckedUpdateWithoutProjectSelectionInputObjectSchema
      ),
    ]),
    create: z.union([
      z.lazy(() => ProjectCreateWithoutProjectSelectionInputObjectSchema),
      z.lazy(
        () => ProjectUncheckedCreateWithoutProjectSelectionInputObjectSchema
      ),
    ]),
  })
  .strict();

export const ProjectUpsertWithoutProjectSelectionInputObjectSchema = Schema;
