import { z } from 'zod';
import { RatingsWhereUniqueInputObjectSchema } from './RatingsWhereUniqueInput.schema';
import { RatingsUpdateWithoutFreelancerInputObjectSchema } from './RatingsUpdateWithoutFreelancerInput.schema';
import { RatingsUncheckedUpdateWithoutFreelancerInputObjectSchema } from './RatingsUncheckedUpdateWithoutFreelancerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsUpdateWithWhereUniqueWithoutFreelancerInput> =
  z
    .object({
      where: z.lazy(() => RatingsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RatingsUpdateWithoutFreelancerInputObjectSchema),
        z.lazy(() => RatingsUncheckedUpdateWithoutFreelancerInputObjectSchema),
      ]),
    })
    .strict();

export const RatingsUpdateWithWhereUniqueWithoutFreelancerInputObjectSchema =
  Schema;
