import { z } from 'zod';
import { ProjectSelectionsCreateManyInputObjectSchema } from './objects/ProjectSelectionsCreateManyInput.schema';

export const ProjectSelectionsCreateManySchema = z.object({
  data: z.union([
    ProjectSelectionsCreateManyInputObjectSchema,
    z.array(ProjectSelectionsCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
