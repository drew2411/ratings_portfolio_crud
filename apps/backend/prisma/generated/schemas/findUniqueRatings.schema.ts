import { z } from 'zod';
import { RatingsWhereUniqueInputObjectSchema } from './objects/RatingsWhereUniqueInput.schema';

export const RatingsFindUniqueSchema = z.object({
  where: RatingsWhereUniqueInputObjectSchema,
});
