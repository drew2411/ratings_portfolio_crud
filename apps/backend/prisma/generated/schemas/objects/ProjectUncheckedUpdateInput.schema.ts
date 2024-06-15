import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IndustrySchema } from '../enums/Industry.schema';
import { EnumIndustryFieldUpdateOperationsInputObjectSchema } from './EnumIndustryFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ProjectApplicationsUncheckedUpdateManyWithoutProjectNestedInputObjectSchema } from './ProjectApplicationsUncheckedUpdateManyWithoutProjectNestedInput.schema';
import { ProjectSelectionsUncheckedUpdateManyWithoutProjectNestedInputObjectSchema } from './ProjectSelectionsUncheckedUpdateManyWithoutProjectNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUncheckedUpdateInput> = z
  .object({
    projectID: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    projectName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    projectDescription: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    clientID: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isHiring: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    startDate: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    endDate: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    paymentStatus: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    industry: z
      .union([
        z.lazy(() => IndustrySchema),
        z.lazy(() => EnumIndustryFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    proposedPrice: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Applications: z
      .lazy(
        () =>
          ProjectApplicationsUncheckedUpdateManyWithoutProjectNestedInputObjectSchema
      )
      .optional(),
    ProjectSelection: z
      .lazy(
        () =>
          ProjectSelectionsUncheckedUpdateManyWithoutProjectNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const ProjectUncheckedUpdateInputObjectSchema = Schema;
