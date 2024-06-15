import { z } from 'zod';
import { PortfolioUpdateManyMutationInputObjectSchema } from './objects/PortfolioUpdateManyMutationInput.schema';
import { PortfolioWhereInputObjectSchema } from './objects/PortfolioWhereInput.schema';

export const PortfolioUpdateManySchema = z.object({
  data: PortfolioUpdateManyMutationInputObjectSchema,
  where: PortfolioWhereInputObjectSchema.optional(),
});
