import { z } from 'zod';
import { RatingsWhereUniqueInputObjectSchema } from './RatingsWhereUniqueInput.schema';
import { RatingsUpdateWithoutClientInputObjectSchema } from './RatingsUpdateWithoutClientInput.schema';
import { RatingsUncheckedUpdateWithoutClientInputObjectSchema } from './RatingsUncheckedUpdateWithoutClientInput.schema';
import { RatingsCreateWithoutClientInputObjectSchema } from './RatingsCreateWithoutClientInput.schema';
import { RatingsUncheckedCreateWithoutClientInputObjectSchema } from './RatingsUncheckedCreateWithoutClientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsUpsertWithWhereUniqueWithoutClientInput> =
  z
    .object({
      where: z.lazy(() => RatingsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RatingsUpdateWithoutClientInputObjectSchema),
        z.lazy(() => RatingsUncheckedUpdateWithoutClientInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => RatingsCreateWithoutClientInputObjectSchema),
        z.lazy(() => RatingsUncheckedCreateWithoutClientInputObjectSchema),
      ]),
    })
    .strict();

export const RatingsUpsertWithWhereUniqueWithoutClientInputObjectSchema =
  Schema;
