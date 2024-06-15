import { z } from 'zod';
import { ProjectSelectionsWhereInputObjectSchema } from './objects/ProjectSelectionsWhereInput.schema';
import { ProjectSelectionsOrderByWithAggregationInputObjectSchema } from './objects/ProjectSelectionsOrderByWithAggregationInput.schema';
import { ProjectSelectionsScalarWhereWithAggregatesInputObjectSchema } from './objects/ProjectSelectionsScalarWhereWithAggregatesInput.schema';
import { ProjectSelectionsScalarFieldEnumSchema } from './enums/ProjectSelectionsScalarFieldEnum.schema';

export const ProjectSelectionsGroupBySchema = z.object({
  where: ProjectSelectionsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ProjectSelectionsOrderByWithAggregationInputObjectSchema,
      ProjectSelectionsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    ProjectSelectionsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ProjectSelectionsScalarFieldEnumSchema),
});
