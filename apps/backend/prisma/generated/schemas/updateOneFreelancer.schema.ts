import { z } from 'zod';
import { FreelancerSelectObjectSchema } from './objects/FreelancerSelect.schema';
import { FreelancerUpdateInputObjectSchema } from './objects/FreelancerUpdateInput.schema';
import { FreelancerUncheckedUpdateInputObjectSchema } from './objects/FreelancerUncheckedUpdateInput.schema';
import { FreelancerWhereUniqueInputObjectSchema } from './objects/FreelancerWhereUniqueInput.schema';

export const FreelancerUpdateOneSchema = z.object({
  select: FreelancerSelectObjectSchema.optional(),
  data: z.union([
    FreelancerUpdateInputObjectSchema,
    FreelancerUncheckedUpdateInputObjectSchema,
  ]),
  where: FreelancerWhereUniqueInputObjectSchema,
});
