import { z } from 'zod';
import { ApplicantStatusSchema } from '../enums/ApplicantStatus.schema';
import { FreelancerCreateNestedOneWithoutApplicationsInputObjectSchema } from './FreelancerCreateNestedOneWithoutApplicationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsCreateWithoutProjectInput> = z
  .object({
    projectApplicationID: z.string().optional(),
    submittedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    proposedAmount: z.number(),
    addtionalNotes: z.string().optional().nullable(),
    Status: z.lazy(() => ApplicantStatusSchema).optional(),
    applicant: z.lazy(
      () => FreelancerCreateNestedOneWithoutApplicationsInputObjectSchema
    ),
  })
  .strict();

export const ProjectApplicationsCreateWithoutProjectInputObjectSchema = Schema;
