import { z } from 'zod';
import { ProjectSelectionsSelectObjectSchema } from './objects/ProjectSelectionsSelect.schema';
import { ProjectSelectionsUpdateInputObjectSchema } from './objects/ProjectSelectionsUpdateInput.schema';
import { ProjectSelectionsUncheckedUpdateInputObjectSchema } from './objects/ProjectSelectionsUncheckedUpdateInput.schema';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './objects/ProjectSelectionsWhereUniqueInput.schema';

export const ProjectSelectionsUpdateOneSchema = z.object({
  select: ProjectSelectionsSelectObjectSchema.optional(),
  data: z.union([
    ProjectSelectionsUpdateInputObjectSchema,
    ProjectSelectionsUncheckedUpdateInputObjectSchema,
  ]),
  where: ProjectSelectionsWhereUniqueInputObjectSchema,
});
