import { z } from 'zod';

export const IndustrySchema = z.enum([
  'webDevlopment',
  'appDevlopment',
  'agriculture',
  'design',
]);
