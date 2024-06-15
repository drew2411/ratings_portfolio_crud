import { z } from 'zod';
import { PortfolioUpdateInputObjectSchema } from './objects/PortfolioUpdateInput.schema';
import { PortfolioUncheckedUpdateInputObjectSchema } from './objects/PortfolioUncheckedUpdateInput.schema';
import { PortfolioWhereUniqueInputObjectSchema } from './objects/PortfolioWhereUniqueInput.schema';

export const PortfolioUpdateOneSchema = z.object({
  data: z.union([
    PortfolioUpdateInputObjectSchema,
    PortfolioUncheckedUpdateInputObjectSchema,
  ]),
  where: PortfolioWhereUniqueInputObjectSchema,
});
