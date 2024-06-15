import { z } from 'zod';
import { PortfolioWhereInputObjectSchema } from './objects/PortfolioWhereInput.schema';
import { PortfolioOrderByWithAggregationInputObjectSchema } from './objects/PortfolioOrderByWithAggregationInput.schema';
import { PortfolioScalarWhereWithAggregatesInputObjectSchema } from './objects/PortfolioScalarWhereWithAggregatesInput.schema';
import { PortfolioScalarFieldEnumSchema } from './enums/PortfolioScalarFieldEnum.schema';

export const PortfolioGroupBySchema = z.object({
  where: PortfolioWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PortfolioOrderByWithAggregationInputObjectSchema,
      PortfolioOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PortfolioScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PortfolioScalarFieldEnumSchema),
});
