import { z } from 'zod';
import { ProjectApplicationsSelectObjectSchema } from './objects/ProjectApplicationsSelect.schema';
import { ProjectApplicationsUpdateInputObjectSchema } from './objects/ProjectApplicationsUpdateInput.schema';
import { ProjectApplicationsUncheckedUpdateInputObjectSchema } from './objects/ProjectApplicationsUncheckedUpdateInput.schema';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './objects/ProjectApplicationsWhereUniqueInput.schema';

export const ProjectApplicationsUpdateOneSchema = z.object({
  select: ProjectApplicationsSelectObjectSchema.optional(),
  data: z.union([
    ProjectApplicationsUpdateInputObjectSchema,
    ProjectApplicationsUncheckedUpdateInputObjectSchema,
  ]),
  where: ProjectApplicationsWhereUniqueInputObjectSchema,
});
