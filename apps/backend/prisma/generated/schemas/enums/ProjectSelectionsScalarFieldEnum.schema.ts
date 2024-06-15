import { z } from 'zod';

export const ProjectSelectionsScalarFieldEnumSchema = z.enum([
  'projectSelectionID',
  'selecteAt',
  'updatedAt',
  'selectedFreelancerID',
  'wage',
  'projectProjectID',
  'OfferingDetails',
  'projectRole',
  'endOfContract',
  'empType',
]);
