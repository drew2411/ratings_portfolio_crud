import { z } from 'zod';
import { RatingsWhereUniqueInputObjectSchema } from './RatingsWhereUniqueInput.schema';
import { RatingsCreateWithoutFreelancerInputObjectSchema } from './RatingsCreateWithoutFreelancerInput.schema';
import { RatingsUncheckedCreateWithoutFreelancerInputObjectSchema } from './RatingsUncheckedCreateWithoutFreelancerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsCreateOrConnectWithoutFreelancerInput> = z
  .object({
    where: z.lazy(() => RatingsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RatingsCreateWithoutFreelancerInputObjectSchema),
      z.lazy(() => RatingsUncheckedCreateWithoutFreelancerInputObjectSchema),
    ]),
  })
  .strict();

export const RatingsCreateOrConnectWithoutFreelancerInputObjectSchema = Schema;
