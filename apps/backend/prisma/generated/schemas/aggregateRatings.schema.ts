import { z } from 'zod';
import { RatingsOrderByWithRelationInputObjectSchema } from './objects/RatingsOrderByWithRelationInput.schema';
import { RatingsWhereInputObjectSchema } from './objects/RatingsWhereInput.schema';
import { RatingsWhereUniqueInputObjectSchema } from './objects/RatingsWhereUniqueInput.schema';
import { RatingsCountAggregateInputObjectSchema } from './objects/RatingsCountAggregateInput.schema';
import { RatingsMinAggregateInputObjectSchema } from './objects/RatingsMinAggregateInput.schema';
import { RatingsMaxAggregateInputObjectSchema } from './objects/RatingsMaxAggregateInput.schema';
import { RatingsAvgAggregateInputObjectSchema } from './objects/RatingsAvgAggregateInput.schema';
import { RatingsSumAggregateInputObjectSchema } from './objects/RatingsSumAggregateInput.schema';

export const RatingsAggregateSchema = z.object({
  orderBy: z
    .union([
      RatingsOrderByWithRelationInputObjectSchema,
      RatingsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RatingsWhereInputObjectSchema.optional(),
  cursor: RatingsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), RatingsCountAggregateInputObjectSchema])
    .optional(),
  _min: RatingsMinAggregateInputObjectSchema.optional(),
  _max: RatingsMaxAggregateInputObjectSchema.optional(),
  _avg: RatingsAvgAggregateInputObjectSchema.optional(),
  _sum: RatingsSumAggregateInputObjectSchema.optional(),
});
