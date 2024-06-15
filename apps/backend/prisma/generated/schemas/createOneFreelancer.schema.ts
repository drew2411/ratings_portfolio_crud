import { z } from 'zod';
import { FreelancerCreateInputObjectSchema } from './objects/FreelancerCreateInput.schema';
import { FreelancerUncheckedCreateInputObjectSchema } from './objects/FreelancerUncheckedCreateInput.schema';

export const FreelancerCreateOneSchema = z.object({
  data: z.union([
    FreelancerCreateInputObjectSchema,
    FreelancerUncheckedCreateInputObjectSchema,
  ]),
});
