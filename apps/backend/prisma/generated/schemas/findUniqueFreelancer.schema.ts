import { z } from 'zod';
import { FreelancerSelectObjectSchema } from './objects/FreelancerSelect.schema';
import { FreelancerWhereUniqueInputObjectSchema } from './objects/FreelancerWhereUniqueInput.schema';

export const FreelancerFindUniqueSchema = z.object({
  select: FreelancerSelectObjectSchema.optional(),
  where: FreelancerWhereUniqueInputObjectSchema,
});
