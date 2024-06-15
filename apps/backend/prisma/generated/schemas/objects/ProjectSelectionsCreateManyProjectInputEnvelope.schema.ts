import { z } from 'zod';
import { ProjectSelectionsCreateManyProjectInputObjectSchema } from './ProjectSelectionsCreateManyProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsCreateManyProjectInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ProjectSelectionsCreateManyProjectInputObjectSchema),
        z
          .lazy(() => ProjectSelectionsCreateManyProjectInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProjectSelectionsCreateManyProjectInputEnvelopeObjectSchema =
  Schema;
