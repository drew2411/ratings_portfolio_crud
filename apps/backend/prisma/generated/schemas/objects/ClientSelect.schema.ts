import { z } from 'zod';
import { RatingsFindManySchema } from '../findManyRatings.schema';
import { ProjectFindManySchema } from '../findManyProject.schema';
import { ClientCountOutputTypeArgsObjectSchema } from './ClientCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientSelect> = z
  .object({
    clientID: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    name: z.boolean().optional(),
    userName: z.boolean().optional(),
    email: z.boolean().optional(),
    phoneNumber: z.boolean().optional(),
    basedIn: z.boolean().optional(),
    companyName: z.boolean().optional(),
    noOfOrders: z.boolean().optional(),
    Ratings: z
      .union([z.boolean(), z.lazy(() => RatingsFindManySchema)])
      .optional(),
    Project: z
      .union([z.boolean(), z.lazy(() => ProjectFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ClientCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ClientSelectObjectSchema = Schema;
