import { z } from 'zod';
import { RatingsWhereInputObjectSchema } from './objects/RatingsWhereInput.schema';

export const RatingsDeleteManySchema = z.object({
  where: RatingsWhereInputObjectSchema.optional(),
});
