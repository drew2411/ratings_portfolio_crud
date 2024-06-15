import { z } from 'zod';
import { ProjectApplicationsCreateManyApplicantInputObjectSchema } from './ProjectApplicationsCreateManyApplicantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsCreateManyApplicantInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ProjectApplicationsCreateManyApplicantInputObjectSchema),
        z
          .lazy(() => ProjectApplicationsCreateManyApplicantInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProjectApplicationsCreateManyApplicantInputEnvelopeObjectSchema =
  Schema;
