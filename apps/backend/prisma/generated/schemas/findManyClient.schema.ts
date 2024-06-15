import { z } from 'zod';
import { ClientSelectObjectSchema } from './objects/ClientSelect.schema';
import { ClientOrderByWithRelationInputObjectSchema } from './objects/ClientOrderByWithRelationInput.schema';
import { ClientWhereInputObjectSchema } from './objects/ClientWhereInput.schema';
import { ClientWhereUniqueInputObjectSchema } from './objects/ClientWhereUniqueInput.schema';
import { ClientScalarFieldEnumSchema } from './enums/ClientScalarFieldEnum.schema';

export const ClientFindManySchema = z.object({
  select: z.lazy(() => ClientSelectObjectSchema.optional()),
  orderBy: z
    .union([
      ClientOrderByWithRelationInputObjectSchema,
      ClientOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ClientWhereInputObjectSchema.optional(),
  cursor: ClientWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ClientScalarFieldEnumSchema).optional(),
});
