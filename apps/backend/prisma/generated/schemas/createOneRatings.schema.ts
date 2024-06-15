import { z } from 'zod';
import { RatingsCreateInputObjectSchema } from './objects/RatingsCreateInput.schema';
import { RatingsUncheckedCreateInputObjectSchema } from './objects/RatingsUncheckedCreateInput.schema';

export const RatingsCreateOneSchema = z.object({
  data: z.union([
    RatingsCreateInputObjectSchema,
    RatingsUncheckedCreateInputObjectSchema,
  ]),
});
