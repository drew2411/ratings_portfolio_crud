import { z } from 'zod';
import { RatingsSelectObjectSchema } from './objects/RatingsSelect.schema';
import { RatingsUpdateInputObjectSchema } from './objects/RatingsUpdateInput.schema';
import { RatingsUncheckedUpdateInputObjectSchema } from './objects/RatingsUncheckedUpdateInput.schema';
import { RatingsWhereUniqueInputObjectSchema } from './objects/RatingsWhereUniqueInput.schema';

export const RatingsUpdateOneSchema = z.object({
  select: RatingsSelectObjectSchema.optional(),
  data: z.union([
    RatingsUpdateInputObjectSchema,
    RatingsUncheckedUpdateInputObjectSchema,
  ]),
  where: RatingsWhereUniqueInputObjectSchema,
});
