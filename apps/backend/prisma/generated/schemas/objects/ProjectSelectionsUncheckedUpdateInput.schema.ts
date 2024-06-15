import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ProjectSelectionsUpdateprojectRoleInputObjectSchema } from './ProjectSelectionsUpdateprojectRoleInput.schema';
import { SkillsSchema } from '../enums/Skills.schema';
import { EmployeeTypeSchema } from '../enums/EmployeeType.schema';
import { EnumEmployeeTypeFieldUpdateOperationsInputObjectSchema } from './EnumEmployeeTypeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectSelectionsUncheckedUpdateInput> = z
  .object({
    projectSelectionID: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    selecteAt: z
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
    selectedFreelancerID: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    wage: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    projectProjectID: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    OfferingDetails: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    projectRole: z
      .union([
        z.lazy(() => ProjectSelectionsUpdateprojectRoleInputObjectSchema),
        z.lazy(() => SkillsSchema).array(),
      ])
      .optional(),
    endOfContract: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    empType: z
      .union([
        z.lazy(() => EmployeeTypeSchema),
        z.lazy(() => EnumEmployeeTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProjectSelectionsUncheckedUpdateInputObjectSchema = Schema;
