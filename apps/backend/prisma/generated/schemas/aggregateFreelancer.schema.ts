import { z } from 'zod';
import { FreelancerOrderByWithRelationInputObjectSchema } from './objects/FreelancerOrderByWithRelationInput.schema';
import { FreelancerWhereInputObjectSchema } from './objects/FreelancerWhereInput.schema';
import { FreelancerWhereUniqueInputObjectSchema } from './objects/FreelancerWhereUniqueInput.schema';
import { FreelancerCountAggregateInputObjectSchema } from './objects/FreelancerCountAggregateInput.schema';
import { FreelancerMinAggregateInputObjectSchema } from './objects/FreelancerMinAggregateInput.schema';
import { FreelancerMaxAggregateInputObjectSchema } from './objects/FreelancerMaxAggregateInput.schema';
import { FreelancerAvgAggregateInputObjectSchema } from './objects/FreelancerAvgAggregateInput.schema';
import { FreelancerSumAggregateInputObjectSchema } from './objects/FreelancerSumAggregateInput.schema';

export const FreelancerAggregateSchema = z.object({
  orderBy: z
    .union([
      FreelancerOrderByWithRelationInputObjectSchema,
      FreelancerOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FreelancerWhereInputObjectSchema.optional(),
  cursor: FreelancerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), FreelancerCountAggregateInputObjectSchema])
    .optional(),
  _min: FreelancerMinAggregateInputObjectSchema.optional(),
  _max: FreelancerMaxAggregateInputObjectSchema.optional(),
  _avg: FreelancerAvgAggregateInputObjectSchema.optional(),
  _sum: FreelancerSumAggregateInputObjectSchema.optional(),
});
