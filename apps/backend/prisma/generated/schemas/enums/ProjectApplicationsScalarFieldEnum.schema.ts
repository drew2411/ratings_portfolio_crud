import { z } from 'zod';

export const ProjectApplicationsScalarFieldEnumSchema = z.enum([
  'projectApplicationID',
  'submittedAt',
  'updatedAt',
  'applicantID',
  'projectProjectID',
  'proposedAmount',
  'addtionalNotes',
  'Status',
]);
