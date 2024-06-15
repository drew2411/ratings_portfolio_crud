import { z } from 'zod';
import { ProjectSelectionsUpdateManyMutationInputObjectSchema } from './objects/ProjectSelectionsUpdateManyMutationInput.schema';
import { ProjectSelectionsWhereInputObjectSchema } from './objects/ProjectSelectionsWhereInput.schema';

export const ProjectSelectionsUpdateManySchema = z.object({
  data: ProjectSelectionsUpdateManyMutationInputObjectSchema,
  where: ProjectSelectionsWhereInputObjectSchema.optional(),
});
