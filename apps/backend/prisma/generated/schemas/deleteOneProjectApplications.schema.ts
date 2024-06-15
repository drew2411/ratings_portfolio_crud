import { z } from 'zod';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './objects/ProjectApplicationsWhereUniqueInput.schema';

export const ProjectApplicationsDeleteOneSchema = z.object({
  where: ProjectApplicationsWhereUniqueInputObjectSchema,
});
