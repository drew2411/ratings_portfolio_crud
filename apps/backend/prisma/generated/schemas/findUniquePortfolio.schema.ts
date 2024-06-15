import { z } from 'zod';
import { PortfolioSelectObjectSchema } from './objects/PortfolioSelect.schema';
import { PortfolioWhereUniqueInputObjectSchema } from './objects/PortfolioWhereUniqueInput.schema';

export const PortfolioFindUniqueSchema = z.object({
  select: PortfolioSelectObjectSchema.optional(),
  where: PortfolioWhereUniqueInputObjectSchema,
});
