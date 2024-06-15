import { z } from 'zod';
import { ClientSelectObjectSchema } from './objects/ClientSelect.schema';
import { ClientCreateInputObjectSchema } from './objects/ClientCreateInput.schema';
import { ClientUncheckedCreateInputObjectSchema } from './objects/ClientUncheckedCreateInput.schema';

export const ClientCreateOneSchema = z.object({
  select: ClientSelectObjectSchema.optional(),
  data: z.union([
    ClientCreateInputObjectSchema,
    ClientUncheckedCreateInputObjectSchema,
  ]),
});
