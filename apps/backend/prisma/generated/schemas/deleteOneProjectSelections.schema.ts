import { z } from 'zod';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './objects/ProjectSelectionsWhereUniqueInput.schema';

export const ProjectSelectionsDeleteOneSchema = z.object({
  where: ProjectSelectionsWhereUniqueInputObjectSchema,
});
