import { z } from 'zod';
import { ProjectSelectionsCreateManySelectedFreelancerInputObjectSchema } from './ProjectSelectionsCreateManySelectedFreelancerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsCreateManySelectedFreelancerInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => ProjectSelectionsCreateManySelectedFreelancerInputObjectSchema
        ),
        z
          .lazy(
            () => ProjectSelectionsCreateManySelectedFreelancerInputObjectSchema
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProjectSelectionsCreateManySelectedFreelancerInputEnvelopeObjectSchema =
  Schema;
