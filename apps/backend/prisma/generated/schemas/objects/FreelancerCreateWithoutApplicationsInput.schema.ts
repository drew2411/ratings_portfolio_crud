import { z } from 'zod';
import { RatingsCreateNestedManyWithoutFreelancerInputObjectSchema } from './RatingsCreateNestedManyWithoutFreelancerInput.schema';
import { ProjectSelectionsCreateNestedManyWithoutSelectedFreelancerInputObjectSchema } from './ProjectSelectionsCreateNestedManyWithoutSelectedFreelancerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FreelancerCreateWithoutApplicationsInput> = z
  .object({
    freelancerID: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    name: z.string(),
    userName: z.string(),
    email: z.string(),
    phoneNumber: z.number(),
    bio: z.string(),
    basedIn: z.string(),
    totalEarnings: z.number().optional(),
    avgRating: z.number().optional(),
    workPreferences: z.string(),
    Ratings: z
      .lazy(() => RatingsCreateNestedManyWithoutFreelancerInputObjectSchema)
      .optional(),
    ProjectSelection: z
      .lazy(
        () =>
          ProjectSelectionsCreateNestedManyWithoutSelectedFreelancerInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const FreelancerCreateWithoutApplicationsInputObjectSchema = Schema;
