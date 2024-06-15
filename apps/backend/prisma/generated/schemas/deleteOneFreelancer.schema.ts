import { z } from 'zod';
import { FreelancerWhereUniqueInputObjectSchema } from './objects/FreelancerWhereUniqueInput.schema';

export const FreelancerDeleteOneSchema = z.object({
  where: FreelancerWhereUniqueInputObjectSchema,
});
