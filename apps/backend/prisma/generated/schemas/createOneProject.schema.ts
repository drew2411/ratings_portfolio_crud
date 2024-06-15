import { z } from 'zod';
import { ProjectSelectObjectSchema } from './objects/ProjectSelect.schema';
import { ProjectCreateInputObjectSchema } from './objects/ProjectCreateInput.schema';
import { ProjectUncheckedCreateInputObjectSchema } from './objects/ProjectUncheckedCreateInput.schema';

export const ProjectCreateOneSchema = z.object({
  select: ProjectSelectObjectSchema.optional(),
  data: z.union([
    ProjectCreateInputObjectSchema,
    ProjectUncheckedCreateInputObjectSchema,
  ]),
});
