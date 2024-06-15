import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumIndustryFilterObjectSchema } from './EnumIndustryFilter.schema';
import { IndustrySchema } from '../enums/Industry.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ClientRelationFilterObjectSchema } from './ClientRelationFilter.schema';
import { ClientWhereInputObjectSchema } from './ClientWhereInput.schema';
import { ProjectApplicationsListRelationFilterObjectSchema } from './ProjectApplicationsListRelationFilter.schema';
import { ProjectSelectionsListRelationFilterObjectSchema } from './ProjectSelectionsListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProjectWhereInputObjectSchema),
        z.lazy(() => ProjectWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectWhereInputObjectSchema),
        z.lazy(() => ProjectWhereInputObjectSchema).array(),
      ])
      .optional(),
    projectID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    projectName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    projectDescription: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    clientID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    isHiring: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    startDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    endDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    paymentStatus: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    industry: z
      .union([
        z.lazy(() => EnumIndustryFilterObjectSchema),
        z.lazy(() => IndustrySchema),
      ])
      .optional(),
    proposedPrice: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    client: z
      .union([
        z.lazy(() => ClientRelationFilterObjectSchema),
        z.lazy(() => ClientWhereInputObjectSchema),
      ])
      .optional(),
    Applications: z
      .lazy(() => ProjectApplicationsListRelationFilterObjectSchema)
      .optional(),
    ProjectSelection: z
      .lazy(() => ProjectSelectionsListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ProjectWhereInputObjectSchema = Schema;
