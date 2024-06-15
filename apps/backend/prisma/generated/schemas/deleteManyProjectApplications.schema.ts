import { z } from 'zod';
import { ProjectApplicationsWhereInputObjectSchema } from './objects/ProjectApplicationsWhereInput.schema';

export const ProjectApplicationsDeleteManySchema = z.object({
  where: ProjectApplicationsWhereInputObjectSchema.optional(),
});
