import { z } from 'zod';
import { ProjectCreateManyClientInputObjectSchema } from './ProjectCreateManyClientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateManyClientInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ProjectCreateManyClientInputObjectSchema),
      z.lazy(() => ProjectCreateManyClientInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ProjectCreateManyClientInputEnvelopeObjectSchema = Schema;
