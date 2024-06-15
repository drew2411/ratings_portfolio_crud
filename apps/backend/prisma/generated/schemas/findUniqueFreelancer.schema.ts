import { z } from 'zod';
import { FreelancerWhereUniqueInputObjectSchema } from './objects/FreelancerWhereUniqueInput.schema';

export const FreelancerFindUniqueSchema = z.object({
  where: FreelancerWhereUniqueInputObjectSchema,
});
