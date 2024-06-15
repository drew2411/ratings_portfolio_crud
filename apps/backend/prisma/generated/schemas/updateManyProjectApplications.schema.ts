import { z } from 'zod';
import { ProjectApplicationsUpdateManyMutationInputObjectSchema } from './objects/ProjectApplicationsUpdateManyMutationInput.schema';
import { ProjectApplicationsWhereInputObjectSchema } from './objects/ProjectApplicationsWhereInput.schema';

export const ProjectApplicationsUpdateManySchema = z.object({
  data: ProjectApplicationsUpdateManyMutationInputObjectSchema,
  where: ProjectApplicationsWhereInputObjectSchema.optional(),
});
