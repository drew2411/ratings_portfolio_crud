import { z } from 'zod';

export const EmployeeTypeSchema = z.enum(['remote', 'hybrid', 'physical']);
