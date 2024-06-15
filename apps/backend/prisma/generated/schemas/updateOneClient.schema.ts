import { z } from 'zod';
import { ClientSelectObjectSchema } from './objects/ClientSelect.schema';
import { ClientUpdateInputObjectSchema } from './objects/ClientUpdateInput.schema';
import { ClientUncheckedUpdateInputObjectSchema } from './objects/ClientUncheckedUpdateInput.schema';
import { ClientWhereUniqueInputObjectSchema } from './objects/ClientWhereUniqueInput.schema';

export const ClientUpdateOneSchema = z.object({
  select: ClientSelectObjectSchema.optional(),
  data: z.union([
    ClientUpdateInputObjectSchema,
    ClientUncheckedUpdateInputObjectSchema,
  ]),
  where: ClientWhereUniqueInputObjectSchema,
});
