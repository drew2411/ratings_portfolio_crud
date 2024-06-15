import { z } from 'zod';
import { RatingsSelectObjectSchema } from './objects/RatingsSelect.schema';
import { RatingsCreateInputObjectSchema } from './objects/RatingsCreateInput.schema';
import { RatingsUncheckedCreateInputObjectSchema } from './objects/RatingsUncheckedCreateInput.schema';

export const RatingsCreateOneSchema = z.object({
  select: RatingsSelectObjectSchema.optional(),
  data: z.union([
    RatingsCreateInputObjectSchema,
    RatingsUncheckedCreateInputObjectSchema,
  ]),
});
