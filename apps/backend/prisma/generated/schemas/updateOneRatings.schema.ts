import { z } from 'zod';
import { RatingsUpdateInputObjectSchema } from './objects/RatingsUpdateInput.schema';
import { RatingsUncheckedUpdateInputObjectSchema } from './objects/RatingsUncheckedUpdateInput.schema';
import { RatingsWhereUniqueInputObjectSchema } from './objects/RatingsWhereUniqueInput.schema';

export const RatingsUpdateOneSchema = z.object({
  data: z.union([
    RatingsUpdateInputObjectSchema,
    RatingsUncheckedUpdateInputObjectSchema,
  ]),
  where: RatingsWhereUniqueInputObjectSchema,
});
