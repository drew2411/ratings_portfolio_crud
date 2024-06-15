import { z } from 'zod';
import { ProjectApplicationsCreateManyProjectInputObjectSchema } from './ProjectApplicationsCreateManyProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsCreateManyProjectInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ProjectApplicationsCreateManyProjectInputObjectSchema),
        z
          .lazy(() => ProjectApplicationsCreateManyProjectInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProjectApplicationsCreateManyProjectInputEnvelopeObjectSchema =
  Schema;
