import { ServiceItem, MethodologyStep, ValueProp } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'diagnosis',
    title: 'Retail Performance Diagnosis',
    description: 'La precisión de los datos antes de la estrategia. Un análisis profundo del estado actual de su punto de venta.',
    details: [
      'Diagnóstico comercial (conversión, flujo, ticket promedio, rotación)',
      'Diagnóstico del equipo (conocimiento, técnicas, actitud)',
      'Auditoría de experiencia en tienda'
    ]
  },
  {
    id: 'mastery',
    title: 'Advisor Mastery Program',
    description: 'Transformamos vendedoras en expertas. El puente entre un producto en el estante y una rutina en casa.',
    details: [
      'Dominio profundo de producto y piel',
      'Técnicas de aplicación y demostración rápida',
      'Conversación beauty: de vender a asesorar'
    ]
  },
  {
    id: 'sales',
    title: 'Sales & Retail Performance',
    description: 'Metodologías comerciales diseñadas específicamente para el entorno de belleza de lujo.',
    details: [
      'Abordaje ritualizado y experiencia de cliente',
      'Técnicas de venta beauty-specific',
      'Desarrollo de mentalidad comercial y confianza'
    ]
  },
  {
    id: 'strategy',
    title: 'Brand & Retail Strategy',
    description: 'Alineación total entre la promesa de la marca y la realidad del punto de venta.',
    details: [
      'Arquitectura de marca en tienda',
      'Activaciones estratégicas de alto impacto',
      'Inteligencia de punto de venta'
    ]
  }
];

export const METHODOLOGY: MethodologyStep[] = [
  {
    step: 1,
    title: 'Diagnóstico',
    duration: 'Semana 1–4',
    description: 'Inmersión total en sus KPIs y cultura de tienda.'
  },
  {
    step: 2,
    title: 'Oportunidades',
    duration: 'Semana 4–5',
    description: 'Identificación de brechas y palancas de crecimiento.'
  },
  {
    step: 3,
    title: 'Diseño a Medida',
    duration: 'Semana 6–7',
    description: 'Creación del programa de capacitación personalizado.'
  },
  {
    step: 4,
    title: 'Ejecución',
    duration: 'Implementación',
    description: 'Despliegue práctico en piso de venta.'
  },
  {
    step: 5,
    title: 'Seguimiento',
    duration: '3 Meses Post',
    description: 'Medición de impacto y ajustes de sostenibilidad.'
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "Expertise",
    description: "Transformamos vendedoras en verdaderas consultoras de belleza."
  },
  {
    title: "Experience",
    description: "Elevamos la experiencia de marca sin sacrificar la performance comercial."
  },
  {
    title: "Results",
    description: "Impacto directo en conversión, ticket promedio y fidelización."
  }
];