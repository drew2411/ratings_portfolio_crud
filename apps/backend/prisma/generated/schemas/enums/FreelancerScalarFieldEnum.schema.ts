import { z } from 'zod';

export const FreelancerScalarFieldEnumSchema = z.enum([
  'freelancerID',
  'createdAt',
  'updatedAt',
  'name',
  'userName',
  'email',
  'phoneNumber',
  'bio',
  'basedIn',
  'totalEarnings',
  'avgRating',
  'workPreferences',
]);
