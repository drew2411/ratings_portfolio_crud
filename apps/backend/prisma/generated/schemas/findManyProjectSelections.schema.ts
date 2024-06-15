import { z } from 'zod';
import { ProjectSelectionsSelectObjectSchema } from './objects/ProjectSelectionsSelect.schema';
import { ProjectSelectionsOrderByWithRelationInputObjectSchema } from './objects/ProjectSelectionsOrderByWithRelationInput.schema';
import { ProjectSelectionsWhereInputObjectSchema } from './objects/ProjectSelectionsWhereInput.schema';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './objects/ProjectSelectionsWhereUniqueInput.schema';
import { ProjectSelectionsScalarFieldEnumSchema } from './enums/ProjectSelectionsScalarFieldEnum.schema';

export const ProjectSelectionsFindManySchema = z.object({
  select: z.lazy(() => ProjectSelectionsSelectObjectSchema.optional()),
  orderBy: z
    .union([
      ProjectSelectionsOrderByWithRelationInputObjectSchema,
      ProjectSelectionsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProjectSelectionsWhereInputObjectSchema.optional(),
  cursor: ProjectSelectionsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ProjectSelectionsScalarFieldEnumSchema).optional(),
});
