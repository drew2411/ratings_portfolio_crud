import { z } from 'zod';
import { RatingsWhereUniqueInputObjectSchema } from './objects/RatingsWhereUniqueInput.schema';

export const RatingsDeleteOneSchema = z.object({
  where: RatingsWhereUniqueInputObjectSchema,
});
