import { z } from 'zod';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './objects/ProjectSelectionsWhereUniqueInput.schema';
import { ProjectSelectionsCreateInputObjectSchema } from './objects/ProjectSelectionsCreateInput.schema';
import { ProjectSelectionsUncheckedCreateInputObjectSchema } from './objects/ProjectSelectionsUncheckedCreateInput.schema';
import { ProjectSelectionsUpdateInputObjectSchema } from './objects/ProjectSelectionsUpdateInput.schema';
import { ProjectSelectionsUncheckedUpdateInputObjectSchema } from './objects/ProjectSelectionsUncheckedUpdateInput.schema';

export const ProjectSelectionsUpsertSchema = z.object({
  where: ProjectSelectionsWhereUniqueInputObjectSchema,
  create: z.union([
    ProjectSelectionsCreateInputObjectSchema,
    ProjectSelectionsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProjectSelectionsUpdateInputObjectSchema,
    ProjectSelectionsUncheckedUpdateInputObjectSchema,
  ]),
});
