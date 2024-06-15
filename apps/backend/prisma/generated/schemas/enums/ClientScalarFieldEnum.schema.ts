import { z } from 'zod';

export const ClientScalarFieldEnumSchema = z.enum([
  'clientID',
  'createdAt',
  'updatedAt',
  'name',
  'userName',
  'email',
  'phoneNumber',
  'basedIn',
  'companyName',
  'noOfOrders',
]);
