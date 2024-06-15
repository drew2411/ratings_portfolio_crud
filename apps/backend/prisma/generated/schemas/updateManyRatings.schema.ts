import { z } from 'zod';
import { RatingsUpdateManyMutationInputObjectSchema } from './objects/RatingsUpdateManyMutationInput.schema';
import { RatingsWhereInputObjectSchema } from './objects/RatingsWhereInput.schema';

export const RatingsUpdateManySchema = z.object({
  data: RatingsUpdateManyMutationInputObjectSchema,
  where: RatingsWhereInputObjectSchema.optional(),
});
