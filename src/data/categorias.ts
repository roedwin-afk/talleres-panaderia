// src/data/categorias.ts

export interface Categoria {
  id: string;              // usado en la URL: /talleres/[id]/ y en el campo "categoria" de cada taller
  nombre: string;          // texto visible
  colorAcento: string;     // hex, se inyecta como CSS variable por página
  descripcionCorta: string; // usada en la tarjeta del hub y en el Hero de la categoría
  imagen: string;          // portada para la tarjeta del hub
}

export const categorias: Categoria[] = [
  {
    id: 'panaderia',
    nombre: 'Panadería',
    colorAcento: '#C05621',
    descripcionCorta: 'Hornos, amasadoras y laminadoras para dominar el pan artesanal e industrial.',
    imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pasteleria',
    nombre: 'Pastelería y Repostería',
    colorAcento: '#B83280',
    descripcionCorta: 'Batidoras, exhibidores y técnicas de decoración para repostería comercial.',
    imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'carniceria',
    nombre: 'Carnicería',
    colorAcento: '#9B2C2C',
    descripcionCorta: 'Molinos, sierras y cortadoras para procesamiento profesional de carnes.',
    imagen: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cocina',
    nombre: 'Cocina y Restaurante',
    colorAcento: '#2C7A7B',
    descripcionCorta: 'Freidoras, licuadoras y procesadores para equipar tu cocina profesional.',
    imagen: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];