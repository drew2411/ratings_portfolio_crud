import { z } from 'zod';
import { ClientSelectObjectSchema } from './objects/ClientSelect.schema';
import { ClientWhereUniqueInputObjectSchema } from './objects/ClientWhereUniqueInput.schema';

export const ClientDeleteOneSchema = z.object({
  select: ClientSelectObjectSchema.optional(),
  where: ClientWhereUniqueInputObjectSchema,
});
