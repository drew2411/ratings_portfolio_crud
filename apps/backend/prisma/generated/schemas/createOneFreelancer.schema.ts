import { z } from 'zod';
import { FreelancerSelectObjectSchema } from './objects/FreelancerSelect.schema';
import { FreelancerCreateInputObjectSchema } from './objects/FreelancerCreateInput.schema';
import { FreelancerUncheckedCreateInputObjectSchema } from './objects/FreelancerUncheckedCreateInput.schema';

export const FreelancerCreateOneSchema = z.object({
  select: FreelancerSelectObjectSchema.optional(),
  data: z.union([
    FreelancerCreateInputObjectSchema,
    FreelancerUncheckedCreateInputObjectSchema,
  ]),
});
