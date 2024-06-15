import { z } from 'zod';
import { ProjectSelectionsWhereInputObjectSchema } from './ProjectSelectionsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsListRelationFilter> = z
  .object({
    every: z.lazy(() => ProjectSelectionsWhereInputObjectSchema).optional(),
    some: z.lazy(() => ProjectSelectionsWhereInputObjectSchema).optional(),
    none: z.lazy(() => ProjectSelectionsWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProjectSelectionsListRelationFilterObjectSchema = Schema;
