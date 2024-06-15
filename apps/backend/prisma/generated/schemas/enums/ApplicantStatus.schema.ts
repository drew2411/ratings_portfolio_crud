import { z } from 'zod';

export const ApplicantStatusSchema = z.enum([
  'rejected',
  'pending',
  'accepted',
]);
