import { z } from 'zod';
import { FreelancerUpdateManyMutationInputObjectSchema } from './objects/FreelancerUpdateManyMutationInput.schema';
import { FreelancerWhereInputObjectSchema } from './objects/FreelancerWhereInput.schema';

export const FreelancerUpdateManySchema = z.object({
  data: FreelancerUpdateManyMutationInputObjectSchema,
  where: FreelancerWhereInputObjectSchema.optional(),
});
