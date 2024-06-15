import { z } from 'zod';
import { ProjectSelectObjectSchema } from './objects/ProjectSelect.schema';
import { ProjectWhereUniqueInputObjectSchema } from './objects/ProjectWhereUniqueInput.schema';
import { ProjectCreateInputObjectSchema } from './objects/ProjectCreateInput.schema';
import { ProjectUncheckedCreateInputObjectSchema } from './objects/ProjectUncheckedCreateInput.schema';
import { ProjectUpdateInputObjectSchema } from './objects/ProjectUpdateInput.schema';
import { ProjectUncheckedUpdateInputObjectSchema } from './objects/ProjectUncheckedUpdateInput.schema';

export const ProjectUpsertSchema = z.object({
  select: ProjectSelectObjectSchema.optional(),
  where: ProjectWhereUniqueInputObjectSchema,
  create: z.union([
    ProjectCreateInputObjectSchema,
    ProjectUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProjectUpdateInputObjectSchema,
    ProjectUncheckedUpdateInputObjectSchema,
  ]),
});
