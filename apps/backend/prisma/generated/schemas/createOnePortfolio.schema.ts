import { z } from 'zod';
import { PortfolioSelectObjectSchema } from './objects/PortfolioSelect.schema';
import { PortfolioCreateInputObjectSchema } from './objects/PortfolioCreateInput.schema';
import { PortfolioUncheckedCreateInputObjectSchema } from './objects/PortfolioUncheckedCreateInput.schema';

export const PortfolioCreateOneSchema = z.object({
  select: PortfolioSelectObjectSchema.optional(),
  data: z.union([
    PortfolioCreateInputObjectSchema,
    PortfolioUncheckedCreateInputObjectSchema,
  ]),
});
