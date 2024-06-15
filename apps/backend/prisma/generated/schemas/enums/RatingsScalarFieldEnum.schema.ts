import { z } from 'zod';

export const RatingsScalarFieldEnumSchema = z.enum([
  'reviewID',
  'createdAt',
  'updatedAt',
  'clientClientID',
  'freelancerFreelancerID',
  'Rating',
  'feedBack',
  'likes',
  'clientSatisfactionScore',
]);
