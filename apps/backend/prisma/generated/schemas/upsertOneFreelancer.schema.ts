import { z } from 'zod';
import { FreelancerSelectObjectSchema } from './objects/FreelancerSelect.schema';
import { FreelancerWhereUniqueInputObjectSchema } from './objects/FreelancerWhereUniqueInput.schema';
import { FreelancerCreateInputObjectSchema } from './objects/FreelancerCreateInput.schema';
import { FreelancerUncheckedCreateInputObjectSchema } from './objects/FreelancerUncheckedCreateInput.schema';
import { FreelancerUpdateInputObjectSchema } from './objects/FreelancerUpdateInput.schema';
import { FreelancerUncheckedUpdateInputObjectSchema } from './objects/FreelancerUncheckedUpdateInput.schema';

export const FreelancerUpsertSchema = z.object({
  select: FreelancerSelectObjectSchema.optional(),
  where: FreelancerWhereUniqueInputObjectSchema,
  create: z.union([
    FreelancerCreateInputObjectSchema,
    FreelancerUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    FreelancerUpdateInputObjectSchema,
    FreelancerUncheckedUpdateInputObjectSchema,
  ]),
});
