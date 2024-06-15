import { z } from 'zod';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './objects/ProjectApplicationsWhereUniqueInput.schema';

export const ProjectApplicationsFindUniqueSchema = z.object({
  where: ProjectApplicationsWhereUniqueInputObjectSchema,
});
