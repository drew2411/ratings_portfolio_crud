import { z } from 'zod';
import { ProjectSelectionsWhereInputObjectSchema } from './objects/ProjectSelectionsWhereInput.schema';

export const ProjectSelectionsDeleteManySchema = z.object({
  where: ProjectSelectionsWhereInputObjectSchema.optional(),
});
