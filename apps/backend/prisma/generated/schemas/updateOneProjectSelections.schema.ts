import { z } from 'zod';
import { ProjectSelectionsUpdateInputObjectSchema } from './objects/ProjectSelectionsUpdateInput.schema';
import { ProjectSelectionsUncheckedUpdateInputObjectSchema } from './objects/ProjectSelectionsUncheckedUpdateInput.schema';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './objects/ProjectSelectionsWhereUniqueInput.schema';

export const ProjectSelectionsUpdateOneSchema = z.object({
  data: z.union([
    ProjectSelectionsUpdateInputObjectSchema,
    ProjectSelectionsUncheckedUpdateInputObjectSchema,
  ]),
  where: ProjectSelectionsWhereUniqueInputObjectSchema,
});
