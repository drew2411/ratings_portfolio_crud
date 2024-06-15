import { z } from 'zod';
import { RatingsWhereInputObjectSchema } from './objects/RatingsWhereInput.schema';
import { RatingsOrderByWithAggregationInputObjectSchema } from './objects/RatingsOrderByWithAggregationInput.schema';
import { RatingsScalarWhereWithAggregatesInputObjectSchema } from './objects/RatingsScalarWhereWithAggregatesInput.schema';
import { RatingsScalarFieldEnumSchema } from './enums/RatingsScalarFieldEnum.schema';

export const RatingsGroupBySchema = z.object({
  where: RatingsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RatingsOrderByWithAggregationInputObjectSchema,
      RatingsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RatingsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RatingsScalarFieldEnumSchema),
});
