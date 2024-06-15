import { z } from 'zod';
import { PortfolioSelectObjectSchema } from './objects/PortfolioSelect.schema';
import { PortfolioUpdateInputObjectSchema } from './objects/PortfolioUpdateInput.schema';
import { PortfolioUncheckedUpdateInputObjectSchema } from './objects/PortfolioUncheckedUpdateInput.schema';
import { PortfolioWhereUniqueInputObjectSchema } from './objects/PortfolioWhereUniqueInput.schema';

export const PortfolioUpdateOneSchema = z.object({
  select: PortfolioSelectObjectSchema.optional(),
  data: z.union([
    PortfolioUpdateInputObjectSchema,
    PortfolioUncheckedUpdateInputObjectSchema,
  ]),
  where: PortfolioWhereUniqueInputObjectSchema,
});
