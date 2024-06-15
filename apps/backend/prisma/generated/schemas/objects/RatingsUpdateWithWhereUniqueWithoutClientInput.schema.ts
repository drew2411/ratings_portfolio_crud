import { z } from 'zod';
import { RatingsWhereUniqueInputObjectSchema } from './RatingsWhereUniqueInput.schema';
import { RatingsUpdateWithoutClientInputObjectSchema } from './RatingsUpdateWithoutClientInput.schema';
import { RatingsUncheckedUpdateWithoutClientInputObjectSchema } from './RatingsUncheckedUpdateWithoutClientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsUpdateWithWhereUniqueWithoutClientInput> =
  z
    .object({
      where: z.lazy(() => RatingsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RatingsUpdateWithoutClientInputObjectSchema),
        z.lazy(() => RatingsUncheckedUpdateWithoutClientInputObjectSchema),
      ]),
    })
    .strict();

export const RatingsUpdateWithWhereUniqueWithoutClientInputObjectSchema =
  Schema;
