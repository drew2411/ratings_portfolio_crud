import { z } from 'zod';
import { PortfolioCreateusefulLinksInputObjectSchema } from './PortfolioCreateusefulLinksInput.schema';
import { SkillsSchema } from '../enums/Skills.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PortfolioCreateInput> = z
  .object({
    portfolioID: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    usefulLinks: z
      .union([
        z.lazy(() => PortfolioCreateusefulLinksInputObjectSchema),
        z.lazy(() => SkillsSchema).array(),
      ])
      .optional(),
    yearsOfExperience: z.number().optional(),
  })
  .strict();

export const PortfolioCreateInputObjectSchema = Schema;
