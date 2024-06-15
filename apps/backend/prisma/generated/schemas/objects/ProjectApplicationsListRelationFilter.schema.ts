import { z } from 'zod';
import { ProjectApplicationsWhereInputObjectSchema } from './ProjectApplicationsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsListRelationFilter> = z
  .object({
    every: z.lazy(() => ProjectApplicationsWhereInputObjectSchema).optional(),
    some: z.lazy(() => ProjectApplicationsWhereInputObjectSchema).optional(),
    none: z.lazy(() => ProjectApplicationsWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProjectApplicationsListRelationFilterObjectSchema = Schema;
