import { z } from 'zod';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './objects/ProjectApplicationsWhereUniqueInput.schema';
import { ProjectApplicationsCreateInputObjectSchema } from './objects/ProjectApplicationsCreateInput.schema';
import { ProjectApplicationsUncheckedCreateInputObjectSchema } from './objects/ProjectApplicationsUncheckedCreateInput.schema';
import { ProjectApplicationsUpdateInputObjectSchema } from './objects/ProjectApplicationsUpdateInput.schema';
import { ProjectApplicationsUncheckedUpdateInputObjectSchema } from './objects/ProjectApplicationsUncheckedUpdateInput.schema';

export const ProjectApplicationsUpsertSchema = z.object({
  where: ProjectApplicationsWhereUniqueInputObjectSchema,
  create: z.union([
    ProjectApplicationsCreateInputObjectSchema,
    ProjectApplicationsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProjectApplicationsUpdateInputObjectSchema,
    ProjectApplicationsUncheckedUpdateInputObjectSchema,
  ]),
});
