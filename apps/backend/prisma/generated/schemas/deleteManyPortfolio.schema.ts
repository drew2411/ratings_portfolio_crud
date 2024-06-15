import { z } from 'zod';
import { PortfolioWhereInputObjectSchema } from './objects/PortfolioWhereInput.schema';

export const PortfolioDeleteManySchema = z.object({
  where: PortfolioWhereInputObjectSchema.optional(),
});
