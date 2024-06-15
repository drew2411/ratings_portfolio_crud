import { z } from 'zod';
import { PortfolioOrderByWithRelationInputObjectSchema } from './objects/PortfolioOrderByWithRelationInput.schema';
import { PortfolioWhereInputObjectSchema } from './objects/PortfolioWhereInput.schema';
import { PortfolioWhereUniqueInputObjectSchema } from './objects/PortfolioWhereUniqueInput.schema';
import { PortfolioCountAggregateInputObjectSchema } from './objects/PortfolioCountAggregateInput.schema';
import { PortfolioMinAggregateInputObjectSchema } from './objects/PortfolioMinAggregateInput.schema';
import { PortfolioMaxAggregateInputObjectSchema } from './objects/PortfolioMaxAggregateInput.schema';
import { PortfolioAvgAggregateInputObjectSchema } from './objects/PortfolioAvgAggregateInput.schema';
import { PortfolioSumAggregateInputObjectSchema } from './objects/PortfolioSumAggregateInput.schema';

export const PortfolioAggregateSchema = z.object({
  orderBy: z
    .union([
      PortfolioOrderByWithRelationInputObjectSchema,
      PortfolioOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PortfolioWhereInputObjectSchema.optional(),
  cursor: PortfolioWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PortfolioCountAggregateInputObjectSchema])
    .optional(),
  _min: PortfolioMinAggregateInputObjectSchema.optional(),
  _max: PortfolioMaxAggregateInputObjectSchema.optional(),
  _avg: PortfolioAvgAggregateInputObjectSchema.optional(),
  _sum: PortfolioSumAggregateInputObjectSchema.optional(),
});
