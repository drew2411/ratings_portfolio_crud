import { z } from 'zod';
import { FreelancerUpdateInputObjectSchema } from './objects/FreelancerUpdateInput.schema';
import { FreelancerUncheckedUpdateInputObjectSchema } from './objects/FreelancerUncheckedUpdateInput.schema';
import { FreelancerWhereUniqueInputObjectSchema } from './objects/FreelancerWhereUniqueInput.schema';

export const FreelancerUpdateOneSchema = z.object({
  data: z.union([
    FreelancerUpdateInputObjectSchema,
    FreelancerUncheckedUpdateInputObjectSchema,
  ]),
  where: FreelancerWhereUniqueInputObjectSchema,
});
