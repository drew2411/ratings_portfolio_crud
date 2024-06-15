import { z } from 'zod';
import { PortfolioSelectObjectSchema } from './objects/PortfolioSelect.schema';
import { PortfolioWhereUniqueInputObjectSchema } from './objects/PortfolioWhereUniqueInput.schema';

export const PortfolioDeleteOneSchema = z.object({
  select: PortfolioSelectObjectSchema.optional(),
  where: PortfolioWhereUniqueInputObjectSchema,
});
