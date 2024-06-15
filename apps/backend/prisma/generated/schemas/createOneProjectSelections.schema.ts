import { z } from 'zod';
import { ProjectSelectionsSelectObjectSchema } from './objects/ProjectSelectionsSelect.schema';
import { ProjectSelectionsCreateInputObjectSchema } from './objects/ProjectSelectionsCreateInput.schema';
import { ProjectSelectionsUncheckedCreateInputObjectSchema } from './objects/ProjectSelectionsUncheckedCreateInput.schema';

export const ProjectSelectionsCreateOneSchema = z.object({
  select: ProjectSelectionsSelectObjectSchema.optional(),
  data: z.union([
    ProjectSelectionsCreateInputObjectSchema,
    ProjectSelectionsUncheckedCreateInputObjectSchema,
  ]),
});
