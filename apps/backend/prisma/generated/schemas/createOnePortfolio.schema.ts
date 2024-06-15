import { z } from 'zod';
import { PortfolioCreateInputObjectSchema } from './objects/PortfolioCreateInput.schema';
import { PortfolioUncheckedCreateInputObjectSchema } from './objects/PortfolioUncheckedCreateInput.schema';

export const PortfolioCreateOneSchema = z.object({
  data: z.union([
    PortfolioCreateInputObjectSchema,
    PortfolioUncheckedCreateInputObjectSchema,
  ]),
});
