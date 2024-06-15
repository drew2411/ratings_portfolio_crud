import { z } from 'zod';
import { RatingsCreateManyInputObjectSchema } from './objects/RatingsCreateManyInput.schema';

export const RatingsCreateManySchema = z.object({
  data: z.union([
    RatingsCreateManyInputObjectSchema,
    z.array(RatingsCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
