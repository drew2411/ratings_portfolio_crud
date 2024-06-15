import { z } from 'zod';
import { PortfolioCreateManyInputObjectSchema } from './objects/PortfolioCreateManyInput.schema';

export const PortfolioCreateManySchema = z.object({
  data: z.union([
    PortfolioCreateManyInputObjectSchema,
    z.array(PortfolioCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
