import { z } from 'zod';
import { ProjectApplicationsOrderByWithRelationInputObjectSchema } from './objects/ProjectApplicationsOrderByWithRelationInput.schema';
import { ProjectApplicationsWhereInputObjectSchema } from './objects/ProjectApplicationsWhereInput.schema';
import { ProjectApplicationsWhereUniqueInputObjectSchema } from './objects/ProjectApplicationsWhereUniqueInput.schema';
import { ProjectApplicationsCountAggregateInputObjectSchema } from './objects/ProjectApplicationsCountAggregateInput.schema';
import { ProjectApplicationsMinAggregateInputObjectSchema } from './objects/ProjectApplicationsMinAggregateInput.schema';
import { ProjectApplicationsMaxAggregateInputObjectSchema } from './objects/ProjectApplicationsMaxAggregateInput.schema';
import { ProjectApplicationsAvgAggregateInputObjectSchema } from './objects/ProjectApplicationsAvgAggregateInput.schema';
import { ProjectApplicationsSumAggregateInputObjectSchema } from './objects/ProjectApplicationsSumAggregateInput.schema';

export const ProjectApplicationsAggregateSchema = z.object({
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
  _count: z
    .union([
      z.literal(true),
      ProjectApplicationsCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: ProjectApplicationsMinAggregateInputObjectSchema.optional(),
  _max: ProjectApplicationsMaxAggregateInputObjectSchema.optional(),
  _avg: ProjectApplicationsAvgAggregateInputObjectSchema.optional(),
  _sum: ProjectApplicationsSumAggregateInputObjectSchema.optional(),
});
