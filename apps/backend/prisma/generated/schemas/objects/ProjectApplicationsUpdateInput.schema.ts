import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ApplicantStatusSchema } from '../enums/ApplicantStatus.schema';
import { EnumApplicantStatusFieldUpdateOperationsInputObjectSchema } from './EnumApplicantStatusFieldUpdateOperationsInput.schema';
import { FreelancerUpdateOneRequiredWithoutApplicationsNestedInputObjectSchema } from './FreelancerUpdateOneRequiredWithoutApplicationsNestedInput.schema';
import { ProjectUpdateOneRequiredWithoutApplicationsNestedInputObjectSchema } from './ProjectUpdateOneRequiredWithoutApplicationsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectApplicationsUpdateInput> = z
  .object({
    projectApplicationID: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    submittedAt: z
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
    proposedAmount: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    addtionalNotes: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Status: z
      .union([
        z.lazy(() => ApplicantStatusSchema),
        z.lazy(() => EnumApplicantStatusFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    applicant: z
      .lazy(
        () =>
          FreelancerUpdateOneRequiredWithoutApplicationsNestedInputObjectSchema
      )
      .optional(),
    project: z
      .lazy(
        () => ProjectUpdateOneRequiredWithoutApplicationsNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const ProjectApplicationsUpdateInputObjectSchema = Schema;
