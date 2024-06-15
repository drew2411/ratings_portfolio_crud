import { z } from 'zod';
import { RatingsCreateWithoutClientInputObjectSchema } from './RatingsCreateWithoutClientInput.schema';
import { RatingsUncheckedCreateWithoutClientInputObjectSchema } from './RatingsUncheckedCreateWithoutClientInput.schema';
import { RatingsCreateOrConnectWithoutClientInputObjectSchema } from './RatingsCreateOrConnectWithoutClientInput.schema';
import { RatingsUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './RatingsUpsertWithWhereUniqueWithoutClientInput.schema';
import { RatingsCreateManyClientInputEnvelopeObjectSchema } from './RatingsCreateManyClientInputEnvelope.schema';
import { RatingsWhereUniqueInputObjectSchema } from './RatingsWhereUniqueInput.schema';
import { RatingsUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './RatingsUpdateWithWhereUniqueWithoutClientInput.schema';
import { RatingsUpdateManyWithWhereWithoutClientInputObjectSchema } from './RatingsUpdateManyWithWhereWithoutClientInput.schema';
import { RatingsScalarWhereInputObjectSchema } from './RatingsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsUpdateManyWithoutClientNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RatingsCreateWithoutClientInputObjectSchema),
        z.lazy(() => RatingsCreateWithoutClientInputObjectSchema).array(),
        z.lazy(() => RatingsUncheckedCreateWithoutClientInputObjectSchema),
        z
          .lazy(() => RatingsUncheckedCreateWithoutClientInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RatingsCreateOrConnectWithoutClientInputObjectSchema),
        z
          .lazy(() => RatingsCreateOrConnectWithoutClientInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => RatingsUpsertWithWhereUniqueWithoutClientInputObjectSchema
        ),
        z
          .lazy(
            () => RatingsUpsertWithWhereUniqueWithoutClientInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RatingsCreateManyClientInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RatingsWhereUniqueInputObjectSchema),
        z.lazy(() => RatingsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RatingsWhereUniqueInputObjectSchema),
        z.lazy(() => RatingsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RatingsWhereUniqueInputObjectSchema),
        z.lazy(() => RatingsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RatingsWhereUniqueInputObjectSchema),
        z.lazy(() => RatingsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => RatingsUpdateWithWhereUniqueWithoutClientInputObjectSchema
        ),
        z
          .lazy(
            () => RatingsUpdateWithWhereUniqueWithoutClientInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RatingsUpdateManyWithWhereWithoutClientInputObjectSchema),
        z
          .lazy(() => RatingsUpdateManyWithWhereWithoutClientInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RatingsScalarWhereInputObjectSchema),
        z.lazy(() => RatingsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const RatingsUpdateManyWithoutClientNestedInputObjectSchema = Schema;
