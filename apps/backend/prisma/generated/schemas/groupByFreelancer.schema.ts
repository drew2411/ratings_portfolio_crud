import { z } from 'zod';
import { FreelancerWhereInputObjectSchema } from './objects/FreelancerWhereInput.schema';
import { FreelancerOrderByWithAggregationInputObjectSchema } from './objects/FreelancerOrderByWithAggregationInput.schema';
import { FreelancerScalarWhereWithAggregatesInputObjectSchema } from './objects/FreelancerScalarWhereWithAggregatesInput.schema';
import { FreelancerScalarFieldEnumSchema } from './enums/FreelancerScalarFieldEnum.schema';

export const FreelancerGroupBySchema = z.object({
  where: FreelancerWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      FreelancerOrderByWithAggregationInputObjectSchema,
      FreelancerOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: FreelancerScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(FreelancerScalarFieldEnumSchema),
});
