import { z } from 'zod';
import { FreelancerOrderByWithRelationInputObjectSchema } from './objects/FreelancerOrderByWithRelationInput.schema';
import { FreelancerWhereInputObjectSchema } from './objects/FreelancerWhereInput.schema';
import { FreelancerWhereUniqueInputObjectSchema } from './objects/FreelancerWhereUniqueInput.schema';
import { FreelancerScalarFieldEnumSchema } from './enums/FreelancerScalarFieldEnum.schema';

export const FreelancerFindFirstSchema = z.object({
  orderBy: z
    .union([
      FreelancerOrderByWithRelationInputObjectSchema,
      FreelancerOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: FreelancerWhereInputObjectSchema.optional(),
  cursor: FreelancerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(FreelancerScalarFieldEnumSchema).optional(),
});
