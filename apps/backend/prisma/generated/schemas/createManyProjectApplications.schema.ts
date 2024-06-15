import { z } from 'zod';
import { ProjectApplicationsCreateManyInputObjectSchema } from './objects/ProjectApplicationsCreateManyInput.schema';

export const ProjectApplicationsCreateManySchema = z.object({
  data: z.union([
    ProjectApplicationsCreateManyInputObjectSchema,
    z.array(ProjectApplicationsCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
