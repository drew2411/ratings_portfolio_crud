import { z } from 'zod';
import { FreelancerSelectObjectSchema } from './objects/FreelancerSelect.schema';
import { FreelancerOrderByWithRelationInputObjectSchema } from './objects/FreelancerOrderByWithRelationInput.schema';
import { FreelancerWhereInputObjectSchema } from './objects/FreelancerWhereInput.schema';
import { FreelancerWhereUniqueInputObjectSchema } from './objects/FreelancerWhereUniqueInput.schema';
import { FreelancerScalarFieldEnumSchema } from './enums/FreelancerScalarFieldEnum.schema';

export const FreelancerFindManySchema = z.object({
  select: z.lazy(() => FreelancerSelectObjectSchema.optional()),
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
