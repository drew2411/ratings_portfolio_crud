import { z } from 'zod';

export const PortfolioScalarFieldEnumSchema = z.enum([
  'portfolioID',
  'createdAt',
  'updatedAt',
  'usefulLinks',
  'yearsOfExperience',
]);
