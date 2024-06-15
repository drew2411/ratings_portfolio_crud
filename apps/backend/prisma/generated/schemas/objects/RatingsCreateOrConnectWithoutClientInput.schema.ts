import { z } from 'zod';
import { RatingsWhereUniqueInputObjectSchema } from './RatingsWhereUniqueInput.schema';
import { RatingsCreateWithoutClientInputObjectSchema } from './RatingsCreateWithoutClientInput.schema';
import { RatingsUncheckedCreateWithoutClientInputObjectSchema } from './RatingsUncheckedCreateWithoutClientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsCreateOrConnectWithoutClientInput> = z
  .object({
    where: z.lazy(() => RatingsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RatingsCreateWithoutClientInputObjectSchema),
      z.lazy(() => RatingsUncheckedCreateWithoutClientInputObjectSchema),
    ]),
  })
  .strict();

export const RatingsCreateOrConnectWithoutClientInputObjectSchema = Schema;
