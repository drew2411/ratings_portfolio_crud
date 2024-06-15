import { z } from 'zod';
import { FreelancerCreateManyInputObjectSchema } from './objects/FreelancerCreateManyInput.schema';

export const FreelancerCreateManySchema = z.object({
  data: z.union([
    FreelancerCreateManyInputObjectSchema,
    z.array(FreelancerCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
