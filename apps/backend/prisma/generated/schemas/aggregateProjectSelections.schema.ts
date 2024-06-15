import { z } from 'zod';
import { ProjectSelectionsOrderByWithRelationInputObjectSchema } from './objects/ProjectSelectionsOrderByWithRelationInput.schema';
import { ProjectSelectionsWhereInputObjectSchema } from './objects/ProjectSelectionsWhereInput.schema';
import { ProjectSelectionsWhereUniqueInputObjectSchema } from './objects/ProjectSelectionsWhereUniqueInput.schema';
import { ProjectSelectionsCountAggregateInputObjectSchema } from './objects/ProjectSelectionsCountAggregateInput.schema';
import { ProjectSelectionsMinAggregateInputObjectSchema } from './objects/ProjectSelectionsMinAggregateInput.schema';
import { ProjectSelectionsMaxAggregateInputObjectSchema } from './objects/ProjectSelectionsMaxAggregateInput.schema';
import { ProjectSelectionsAvgAggregateInputObjectSchema } from './objects/ProjectSelectionsAvgAggregateInput.schema';
import { ProjectSelectionsSumAggregateInputObjectSchema } from './objects/ProjectSelectionsSumAggregateInput.schema';

export const ProjectSelectionsAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), ProjectSelectionsCountAggregateInputObjectSchema])
    .optional(),
  _min: ProjectSelectionsMinAggregateInputObjectSchema.optional(),
  _max: ProjectSelectionsMaxAggregateInputObjectSchema.optional(),
  _avg: ProjectSelectionsAvgAggregateInputObjectSchema.optional(),
  _sum: ProjectSelectionsSumAggregateInputObjectSchema.optional(),
});
