import { z } from 'zod';
import { ProjectApplicationsCreateInputObjectSchema } from './objects/ProjectApplicationsCreateInput.schema';
import { ProjectApplicationsUncheckedCreateInputObjectSchema } from './objects/ProjectApplicationsUncheckedCreateInput.schema';

export const ProjectApplicationsCreateOneSchema = z.object({
  data: z.union([
    ProjectApplicationsCreateInputObjectSchema,
    ProjectApplicationsUncheckedCreateInputObjectSchema,
  ]),
});
