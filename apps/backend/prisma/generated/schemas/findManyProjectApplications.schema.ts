import { z } from 'zod';
import { ProjectApplicationsSelectObjectSchema } from './objects/ProjectApplicationsSelect.schema';
import { ProjectApplicationsOrderByWithRelationInputObjectSchema } from './objects/ProjectApplicationsOrderByWithRelationInput.schema';
import { ProjectApplicationsWhereInputObjectSchema } from './objects/ProjectApplicationsWhereInput.schema';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './objects/ProjectApplicationsWhereUniqueInput.schema';
import { ProjectApplicationsScalarFieldEnumSchema } from './enums/ProjectApplicationsScalarFieldEnum.schema';

export const ProjectApplicationsFindManySchema = z.object({
  select: z.lazy(() => ProjectApplicationsSelectObjectSchema.optional()),
  orderBy: z
    .union([
      ProjectApplicationsOrderByWithRelationInputObjectSchema,
      ProjectApplicationsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProjectApplicationsWhereInputObjectSchema.optional(),
  cursor: ProjectApplicationsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ProjectApplicationsScalarFieldEnumSchema).optional(),
});
