import { z } from 'zod';
import { PortfolioWhereUniqueInputObjectSchema } from './objects/PortfolioWhereUniqueInput.schema';
import { PortfolioCreateInputObjectSchema } from './objects/PortfolioCreateInput.schema';
import { PortfolioUncheckedCreateInputObjectSchema } from './objects/PortfolioUncheckedCreateInput.schema';
import { PortfolioUpdateInputObjectSchema } from './objects/PortfolioUpdateInput.schema';
import { PortfolioUncheckedUpdateInputObjectSchema } from './objects/PortfolioUncheckedUpdateInput.schema';

export const PortfolioUpsertSchema = z.object({
  where: PortfolioWhereUniqueInputObjectSchema,
  create: z.union([
    PortfolioCreateInputObjectSchema,
    PortfolioUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PortfolioUpdateInputObjectSchema,
    PortfolioUncheckedUpdateInputObjectSchema,
  ]),
});
