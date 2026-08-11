// src/data/categorias.ts

export interface Categoria {
  id: string;              // usado en la URL: /talleres/[id]/ y en el campo "categoria" de cada taller
  nombre: string;          // texto visible
  colorAcento: string;     // hex, se inyecta como CSS variable por página
  descripcionCorta: string; // usada en la tarjeta del hub y en el Hero de la categoría
  imagen: string;          // portada para la tarjeta del hub
  activa: boolean;         // controla si aparece en el hub (/) — las rutas siguen existiendo aunque esté en false
}

export interface Menu {
  id: string;              // usado en la URL: /talleres/[id]/ y en el campo "categoria" de cada taller
  nombre: string;           // portada para la tarjeta del hub
  tag: string;
}

export const categorias: Categoria[] = [
  {
    id: 'panaderia',
    nombre: 'Panadería',
    colorAcento: '#C05621',
    descripcionCorta: 'Hornos, amasadoras y laminadoras para dominar el pan artesanal e industrial.',
    imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    activa: true,
  },
];

export const menu: Menu[] = [
  {
    id: 'talleres',
    nombre: 'Talleres',
    tag: 'workshops',
  },
  {
    id: 'formulario',
    nombre: 'Formulario',
    tag: 'registration',
  },
  {
    id: 'talleres-anteriores',
    nombre: 'Talleres Anteriores',
    tag: 'talleres-anteriores',
  },
  {
    id: 'faq',
    nombre: 'Preguntas Frecuentes',
    tag: 'faq',
  },
];