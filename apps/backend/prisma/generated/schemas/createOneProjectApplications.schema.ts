import { z } from 'zod';
import { ProjectApplicationsSelectObjectSchema } from './objects/ProjectApplicationsSelect.schema';
import { ProjectApplicationsCreateInputObjectSchema } from './objects/ProjectApplicationsCreateInput.schema';
import { ProjectApplicationsUncheckedCreateInputObjectSchema } from './objects/ProjectApplicationsUncheckedCreateInput.schema';

export const ProjectApplicationsCreateOneSchema = z.object({
  select: ProjectApplicationsSelectObjectSchema.optional(),
  data: z.union([
    ProjectApplicationsCreateInputObjectSchema,
    ProjectApplicationsUncheckedCreateInputObjectSchema,
  ]),
});
