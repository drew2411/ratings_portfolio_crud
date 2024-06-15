import { z } from 'zod';
import { RatingsWhereUniqueInputObjectSchema } from './RatingsWhereUniqueInput.schema';
import { RatingsUpdateWithoutFreelancerInputObjectSchema } from './RatingsUpdateWithoutFreelancerInput.schema';
import { RatingsUncheckedUpdateWithoutFreelancerInputObjectSchema } from './RatingsUncheckedUpdateWithoutFreelancerInput.schema';
import { RatingsCreateWithoutFreelancerInputObjectSchema } from './RatingsCreateWithoutFreelancerInput.schema';
import { RatingsUncheckedCreateWithoutFreelancerInputObjectSchema } from './RatingsUncheckedCreateWithoutFreelancerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsUpsertWithWhereUniqueWithoutFreelancerInput> =
  z
    .object({
      where: z.lazy(() => RatingsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RatingsUpdateWithoutFreelancerInputObjectSchema),
        z.lazy(() => RatingsUncheckedUpdateWithoutFreelancerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => RatingsCreateWithoutFreelancerInputObjectSchema),
        z.lazy(() => RatingsUncheckedCreateWithoutFreelancerInputObjectSchema),
      ]),
    })
    .strict();

export const RatingsUpsertWithWhereUniqueWithoutFreelancerInputObjectSchema =
  Schema;
