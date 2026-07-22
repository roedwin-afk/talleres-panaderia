// src/data/content.ts

// ============================================================
// SITIO — contenido de una sola instancia (Header, Hero, Footer)
// ============================================================

export const sitio = {
  nombreEmpresa: "Equipo y Partes El Salvador",
  header: {
    textoBotonNav: "Ver Talleres",
    anclaBotonNav: "#workshops",
  },
  hero: {
    titulo: "Domina la Alta Panadería con Equipamiento Profesional",
    descripcion:
      "Nuestros talleres prácticos son el espacio ideal para perfeccionar tu técnica. Guiados por chefs expertos, descubrirás cómo el uso de maquinaria e insumos de alto rendimiento transforma tus recetas en obras maestras.",
    textoBoton: "Conoce nuestros próximos talleres",
    anclaBoton: "#workshops",
    imagenFondo:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  footer: {
    copyright: "© 2026 Equipo y Partes El Salvador (Grupo Promaica). Todos los derechos reservados.",
  },
};

// ============================================================
// FAQ, TESTIMONIOS, TALLERES ANTERIORES — pendientes (Paso 9)
// ============================================================

export interface FaqItem {
  pregunta: string;
  respuesta: string;
}
export const faq: FaqItem[] = [
  {
    pregunta: "¿Necesito experiencia previa en panadería?",
    respuesta: "No. La mayoría de nuestros talleres están diseñados para todo público, salvo los marcados como 'Intermedio' o 'Avanzado', donde sí se recomienda conocimiento básico de amasado.",
  },
  {
    pregunta: "¿Qué incluye el precio del taller?",
    respuesta: "Materia prima completa, uso de delantal y herramientas, degustación, material impreso y diploma de participación firmado por el chef instructor.",
  },
  {
    pregunta: "¿Puedo cancelar o cambiar mi inscripción?",
    respuesta: "Sí, contáctanos con al menos 48 horas de anticipación para reprogramar tu cupo sin costo adicional a otro taller disponible.",
  },
  {
    pregunta: "¿Hay restricción de edad?",
    respuesta: "Nuestros talleres están dirigidos a mayores de 16 años, dado el uso de equipo industrial como hornos y amasadoras.",
  },
  {
    pregunta: "¿Cómo se confirma mi pago?",
    respuesta: "El formulario en esta página solo reserva tu espacio. Un asesor comercial te contactará directamente para gestionar el pago y confirmar los detalles finales.",
  },
];

export interface Testimonio {
  nombre: string;
  taller: string;
  texto: string;
  imagen: string;
}
export const testimonios: Testimonio[] = [
  {
    nombre: "Roxana Guevara",
    taller: "Masa Madre y Panes Rústicos",
    texto: "Llegué sin saber nada de panificación y salí con la confianza para hacer mi propio pan en casa. El chef explica todo con mucha paciencia.",
    imagen: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    nombre: "Julio César Amaya",
    taller: "Pizzas Artesanales",
    texto: "El uso de los hornos de piso profesionales marcó la diferencia. Vale mucho la pena para quien quiere emprender con un negocio de pizzas.",
    imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    nombre: "Marielos Cortez",
    taller: "Fundamentos de Pastelería Francesa",
    texto: "Grupos reducidos de verdad ayudan. Pude practicar cada técnica con el equipo de la exhibición y resolver mis dudas al momento.",
    imagen: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
];

export interface TallerAnterior {
  titulo: string;
  imagen: string;
}
export const talleresAnteriores: TallerAnterior[] = [
  {
    titulo: "Amasado profesional en vivo",
    imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    titulo: "Demostración de hornos rotativos",
    imagen: "https://images.unsplash.com/photo-1766232280181-0607bd9fe6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  { 
    titulo: "Grupo taller de pastelería",
    imagen: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    titulo: "Entrega de diplomas",
    imagen: "https://images.unsplash.com/photo-1750128327271-d37dff37497d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];



