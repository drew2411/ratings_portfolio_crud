import { z } from 'zod';
import { PortfolioOrderByWithRelationInputObjectSchema } from './objects/PortfolioOrderByWithRelationInput.schema';
import { PortfolioWhereInputObjectSchema } from './objects/PortfolioWhereInput.schema';
import { PortfolioWhereUniqueInputObjectSchema } from './objects/PortfolioWhereUniqueInput.schema';
import { PortfolioScalarFieldEnumSchema } from './enums/PortfolioScalarFieldEnum.schema';

export const PortfolioFindFirstSchema = z.object({
  orderBy: z
    .union([
      PortfolioOrderByWithRelationInputObjectSchema,
      PortfolioOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PortfolioWhereInputObjectSchema.optional(),
  cursor: PortfolioWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PortfolioScalarFieldEnumSchema).optional(),
});
