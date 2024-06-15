import { z } from 'zod';
import { ProjectApplicationsWhereInputObjectSchema } from './objects/ProjectApplicationsWhereInput.schema';
import { ProjectApplicationsOrderByWithAggregationInputObjectSchema } from './objects/ProjectApplicationsOrderByWithAggregationInput.schema';
import { ProjectApplicationsScalarWhereWithAggregatesInputObjectSchema } from './objects/ProjectApplicationsScalarWhereWithAggregatesInput.schema';
import { ProjectApplicationsScalarFieldEnumSchema } from './enums/ProjectApplicationsScalarFieldEnum.schema';

export const ProjectApplicationsGroupBySchema = z.object({
  where: ProjectApplicationsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ProjectApplicationsOrderByWithAggregationInputObjectSchema,
      ProjectApplicationsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    ProjectApplicationsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ProjectApplicationsScalarFieldEnumSchema),
});
