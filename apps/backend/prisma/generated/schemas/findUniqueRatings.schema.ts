import { z } from 'zod';
import { RatingsSelectObjectSchema } from './objects/RatingsSelect.schema';
import { RatingsWhereUniqueInputObjectSchema } from './objects/RatingsWhereUniqueInput.schema';

export const RatingsFindUniqueSchema = z.object({
  select: RatingsSelectObjectSchema.optional(),
  where: RatingsWhereUniqueInputObjectSchema,
});
