import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  businessName: z.string().min(2, { message: 'Business name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  projectType: z.string().min(1, { message: 'Please select a project type.' }),
  budgetRange: z.string().min(1, { message: 'Please select a budget range.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export const ConsultationSchema = z.object({
  clientName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  date: z.string().min(1, { message: 'Please select a date.' }),
  projectType: z.string().min(1, { message: 'Please select a project type.' }),
});

export type ContactFormInput = z.infer<typeof ContactFormSchema>;
export type ConsultationInput = z.infer<typeof ConsultationSchema>;
