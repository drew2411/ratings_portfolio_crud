import { z } from 'zod';
import { FreelancerWhereInputObjectSchema } from './objects/FreelancerWhereInput.schema';

export const FreelancerDeleteManySchema = z.object({
  where: FreelancerWhereInputObjectSchema.optional(),
});
