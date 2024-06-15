import { z } from 'zod';
import { ProjectApplicationsUpdateInputObjectSchema } from './objects/ProjectApplicationsUpdateInput.schema';
import { ProjectApplicationsUncheckedUpdateInputObjectSchema } from './objects/ProjectApplicationsUncheckedUpdateInput.schema';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './objects/ProjectApplicationsWhereUniqueInput.schema';

export const ProjectApplicationsUpdateOneSchema = z.object({
  data: z.union([
    ProjectApplicationsUpdateInputObjectSchema,
    ProjectApplicationsUncheckedUpdateInputObjectSchema,
  ]),
  where: ProjectApplicationsWhereUniqueInputObjectSchema,
});
