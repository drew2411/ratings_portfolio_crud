import { z } from 'zod';
import { PortfolioWhereUniqueInputObjectSchema } from './objects/PortfolioWhereUniqueInput.schema';

export const PortfolioFindUniqueSchema = z.object({
  where: PortfolioWhereUniqueInputObjectSchema,
});
