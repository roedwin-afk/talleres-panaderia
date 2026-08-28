// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const talleres = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/talleres' }),
  schema: z.object({
    nombre: z.string(),
    slug: z.string(),
    categoria: z.string(),
    fecha: z.coerce.date(),
    horarioInicio: z.string(),
    horarioFin: z.string(),
    lugar: z.string(),
    instructor: z.string(),
    instructorGenero: z.enum(['m', 'f']).default('m'),
    nivel: z.enum(['Todo público', 'Principiante', 'Intermedio', 'Avanzado']),
    cuposDisponibles: z.number().int().nonnegative(),
    cuposTotales: z.number().int().positive(),
    precio: z.number().positive(),
    // Precio de preventa: aplica SOLO si se paga el taller completo (100%) al reservar.
    // Si la reserva se hace con el 50%, el descuento no aplica y el precio sigue siendo `precio`.
    precioPreventa: z.number().positive().optional(),
    imagen: z.string(),
    imagenName: z.string(),
    imagenAlt: z.string(),
    destacado: z.boolean().default(false),
  }),
});

export const collections = { talleres };