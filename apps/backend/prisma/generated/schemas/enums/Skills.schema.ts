import { z } from 'zod';

export const SkillsSchema = z.enum([
  'graphicDesigner',
  'frontEndDevloper',
  'BackEndDevloper',
  'LogoExpert',
]);
