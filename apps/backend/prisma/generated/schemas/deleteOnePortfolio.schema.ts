import { z } from 'zod';
import { PortfolioWhereUniqueInputObjectSchema } from './objects/PortfolioWhereUniqueInput.schema';

export const PortfolioDeleteOneSchema = z.object({
  where: PortfolioWhereUniqueInputObjectSchema,
});
