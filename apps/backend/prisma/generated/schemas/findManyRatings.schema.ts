import { z } from 'zod';
import { RatingsSelectObjectSchema } from './objects/RatingsSelect.schema';
import { RatingsOrderByWithRelationInputObjectSchema } from './objects/RatingsOrderByWithRelationInput.schema';
import { RatingsWhereInputObjectSchema } from './objects/RatingsWhereInput.schema';
import { RatingsWhereUniqueInputObjectSchema } from './objects/RatingsWhereUniqueInput.schema';
import { RatingsScalarFieldEnumSchema } from './enums/RatingsScalarFieldEnum.schema';

export const RatingsFindManySchema = z.object({
  select: z.lazy(() => RatingsSelectObjectSchema.optional()),
  orderBy: z
    .union([
      RatingsOrderByWithRelationInputObjectSchema,
      RatingsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RatingsWhereInputObjectSchema.optional(),
  cursor: RatingsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RatingsScalarFieldEnumSchema).optional(),
});
