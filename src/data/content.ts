// src/data/content.ts

// ============================================================
// SITIO — contenido de una sola instancia (Header, Hero del hub, Footer)
// ============================================================

export const sitio = {
  nombreEmpresa: "Equipo y Partes El Salvador",
  footer: {
    copyrightBase: "Equipo y Partes El Salvador (Grupo Promaica). Todos los derechos reservados.",
  },
};

// ============================================================
// CONTENIDO POR CATEGORÍA — FAQ, Testimonios, Talleres Anteriores
// ============================================================

export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export interface Testimonio {
  nombre: string;
  taller: string;
  texto: string;
  imagen: string;
}

export interface TallerAnterior {
  titulo: string;
  imagen: string;
}

export interface ContenidoCategoria {
  heroTitulo: string;
  heroDescripcion: string;
  heroImagenesFondo: string[];
  faq: FaqItem[];
  testimonios: Testimonio[];
  talleresAnteriores: TallerAnterior[];
}

export const contenidoPorCategoria: Record<string, ContenidoCategoria> = {
  panaderia: {
    heroTitulo: "Aprende, Emprende y Crece con Nuestros Talleres Prácticos",
    heroDescripcion:
      "Talleres prácticos creados para emprendedores y personas que quieren aprender nuevas preparaciones utilizando maquinaria profesional. Aprende haciendo y descubre cómo los equipos adecuados pueden ayudarte a agilizar procesos, facilitar el trabajo y llevar nuevas ideas a tu negocio.",
    heroImagenesFondo: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1779006887705-5cf0e2794e08?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    ],
    faq: [
      {
        pregunta: "¿Qué incluye el precio del taller?",
        respuesta: "Incluye los ingredientes y materiales utilizados durante la actividad, uso de maquinaria profesional y utensilios, hoja impresa con ingredientes y procedimiento de la receta, degustación de los productos preparados y diploma de participación.",
      },
      {
        pregunta: "¿Los talleres son prácticos?",
        respuesta: "Sí. Queremos que aprendas haciendo. Durante nuestros talleres podrás participar en las preparaciones y conocer cómo utilizar maquinaria profesional que ayuda a agilizar y facilitar diferentes procesos de producción.",
      },
      {
        pregunta: "¿Puedo cancelar o cambiar mi inscripción?",
        respuesta: "Si cancelas tu participación o no puedes asistir al taller, no se realizan devoluciones de dinero en efectivo. El monto pagado se entregará como nota de crédito válida exclusivamente para la compra de materias primas en Equipo y Partes.",
      },
    ],
    testimonios: [
      {
        nombre: "Roxana Guevara",
        taller: "Masa Madre y Panes Rústicos",
        texto: "Llegué sin saber nada de panificación y salí con la confianza para hacer mi propio pan en casa. El instructor explica todo con mucha paciencia.",
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
    ],
    talleresAnteriores: [
      {
        titulo: "Amasado profesional en vivo",
        imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        titulo: "Demostración de hornos rotativos",
        imagen: "https://images.unsplash.com/photo-1738846258491-442902625fdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        titulo: "Grupo taller de pastelería",
        imagen: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        titulo: "Entrega de diplomas",
        imagen: "https://images.unsplash.com/photo-1759142016096-a9d1a5ebcc09?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  // pasteleria, carniceria y cocina quedan sin entrada acá a propósito —
  // la página "Próximamente" del Paso 13 no necesita este contenido todavía.
};