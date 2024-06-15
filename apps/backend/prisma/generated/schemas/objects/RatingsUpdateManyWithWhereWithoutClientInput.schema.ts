import { z } from 'zod';
import { RatingsScalarWhereInputObjectSchema } from './RatingsScalarWhereInput.schema';
import { RatingsUpdateManyMutationInputObjectSchema } from './RatingsUpdateManyMutationInput.schema';
import { RatingsUncheckedUpdateManyWithoutRatingsInputObjectSchema } from './RatingsUncheckedUpdateManyWithoutRatingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsUpdateManyWithWhereWithoutClientInput> = z
  .object({
    where: z.lazy(() => RatingsScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => RatingsUpdateManyMutationInputObjectSchema),
      z.lazy(() => RatingsUncheckedUpdateManyWithoutRatingsInputObjectSchema),
    ]),
  })
  .strict();

export const RatingsUpdateManyWithWhereWithoutClientInputObjectSchema = Schema;
