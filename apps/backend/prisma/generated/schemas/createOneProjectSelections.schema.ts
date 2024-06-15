import { z } from 'zod';
import { ProjectSelectionsCreateInputObjectSchema } from './objects/ProjectSelectionsCreateInput.schema';
import { ProjectSelectionsUncheckedCreateInputObjectSchema } from './objects/ProjectSelectionsUncheckedCreateInput.schema';

export const ProjectSelectionsCreateOneSchema = z.object({
  data: z.union([
    ProjectSelectionsCreateInputObjectSchema,
    ProjectSelectionsUncheckedCreateInputObjectSchema,
  ]),
});
