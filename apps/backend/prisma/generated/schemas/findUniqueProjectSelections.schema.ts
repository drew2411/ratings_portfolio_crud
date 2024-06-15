import { z } from 'zod';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './objects/ProjectSelectionsWhereUniqueInput.schema';

export const ProjectSelectionsFindUniqueSchema = z.object({
  where: ProjectSelectionsWhereUniqueInputObjectSchema,
});
