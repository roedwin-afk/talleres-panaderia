// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const talleresCollection = defineCollection({
  type: 'content', // usamos markdown con frontmatter, no solo data JSON
  schema: z.object({
    nombre: z.string(),
    slug: z.string(), // usado para el modal de detalle y para "scrollToForm"
    fecha: z.date(),
    horarioInicio: z.string(), // "09:00 AM" — lo dejamos string, no vale la pena tipar como Date solo la hora
    horarioFin: z.string(),
    instructor: z.string(),
    instructorGenero: z.enum(['m', 'f']).default('m'), // para "Chef Instructor" vs "Chef Instructora"
    nivel: z.enum(['Todo público', 'Principiante', 'Intermedio', 'Avanzado']),
    cuposDisponibles: z.number().int().nonnegative(),
    cuposTotales: z.number().int().positive(),
    precio: z.number().positive(),
    imagen: z.string(), // path o URL de la imagen de portada
    imagenAlt: z.string(),
    destacado: z.boolean().default(false), // por si luego querés resaltar un taller en particular
  }),
});

export const collections = {
  talleres: talleresCollection,
};