import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ClientUpdateOneRequiredWithoutRatingsNestedInputObjectSchema } from './ClientUpdateOneRequiredWithoutRatingsNestedInput.schema';
import { FreelancerUpdateOneRequiredWithoutRatingsNestedInputObjectSchema } from './FreelancerUpdateOneRequiredWithoutRatingsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingsUpdateInput> = z
  .object({
    reviewID: z
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
    Rating: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    feedBack: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    likes: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    clientSatisfactionScore: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    client: z
      .lazy(() => ClientUpdateOneRequiredWithoutRatingsNestedInputObjectSchema)
      .optional(),
    freelancer: z
      .lazy(
        () => FreelancerUpdateOneRequiredWithoutRatingsNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const RatingsUpdateInputObjectSchema = Schema;
