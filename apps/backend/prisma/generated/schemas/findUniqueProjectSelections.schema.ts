import { z } from 'zod';
import { ProjectSelectionsSelectObjectSchema } from './objects/ProjectSelectionsSelect.schema';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './objects/ProjectSelectionsWhereUniqueInput.schema';

export const ProjectSelectionsFindUniqueSchema = z.object({
  select: ProjectSelectionsSelectObjectSchema.optional(),
  where: ProjectSelectionsWhereUniqueInputObjectSchema,
});
