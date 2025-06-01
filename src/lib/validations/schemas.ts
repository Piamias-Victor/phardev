/**
 * Zod validation schemas for Phardev
 */

import { z } from 'zod'

// Contact form validation
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères'),
  
  email: z
    .string()
    .email('Adresse email invalide')
    .min(1, 'L\'email est requis'),
  
  company: z
    .string()
    .optional(),
  
  projectType: z
    .enum(['site-vitrine', 'e-commerce', 'iot', 'ia', 'analytics'])
    .default('site-vitrine'),
  
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères'),
  
  budget: z
    .string()
    .optional(),
  
  timeline: z
    .string()
    .optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Newsletter validation
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Adresse email invalide')
    .min(1, 'L\'email est requis'),
})

export type NewsletterData = z.infer<typeof newsletterSchema>