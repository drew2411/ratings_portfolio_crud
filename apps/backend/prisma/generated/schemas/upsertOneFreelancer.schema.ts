import { z } from 'zod';
import { FreelancerWhereUniqueInputObjectSchema } from './objects/FreelancerWhereUniqueInput.schema';
import { FreelancerCreateInputObjectSchema } from './objects/FreelancerCreateInput.schema';
import { FreelancerUncheckedCreateInputObjectSchema } from './objects/FreelancerUncheckedCreateInput.schema';
import { FreelancerUpdateInputObjectSchema } from './objects/FreelancerUpdateInput.schema';
import { FreelancerUncheckedUpdateInputObjectSchema } from './objects/FreelancerUncheckedUpdateInput.schema';

export const FreelancerUpsertSchema = z.object({
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
