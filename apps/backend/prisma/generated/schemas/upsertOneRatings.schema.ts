import { z } from 'zod';
import { RatingsSelectObjectSchema } from './objects/RatingsSelect.schema';
import { RatingsWhereUniqueInputObjectSchema } from './objects/RatingsWhereUniqueInput.schema';
import { RatingsCreateInputObjectSchema } from './objects/RatingsCreateInput.schema';
import { RatingsUncheckedCreateInputObjectSchema } from './objects/RatingsUncheckedCreateInput.schema';
import { RatingsUpdateInputObjectSchema } from './objects/RatingsUpdateInput.schema';
import { RatingsUncheckedUpdateInputObjectSchema } from './objects/RatingsUncheckedUpdateInput.schema';

export const RatingsUpsertSchema = z.object({
  select: RatingsSelectObjectSchema.optional(),
  where: RatingsWhereUniqueInputObjectSchema,
  create: z.union([
    RatingsCreateInputObjectSchema,
    RatingsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RatingsUpdateInputObjectSchema,
    RatingsUncheckedUpdateInputObjectSchema,
  ]),
});
