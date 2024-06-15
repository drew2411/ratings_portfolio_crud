import { z } from 'zod';
import { ProjectApplicationsSelectObjectSchema } from './objects/ProjectApplicationsSelect.schema';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './objects/ProjectApplicationsWhereUniqueInput.schema';

export const ProjectApplicationsFindUniqueSchema = z.object({
  select: ProjectApplicationsSelectObjectSchema.optional(),
  where: ProjectApplicationsWhereUniqueInputObjectSchema,
});
