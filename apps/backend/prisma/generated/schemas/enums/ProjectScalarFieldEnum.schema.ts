import { z } from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum([
  'projectID',
  'createdAt',
  'updatedAt',
  'projectName',
  'projectDescription',
  'clientID',
  'isHiring',
  'startDate',
  'endDate',
  'paymentStatus',
  'industry',
  'proposedPrice',
]);
