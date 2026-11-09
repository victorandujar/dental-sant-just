/**
 * Dades publicades a la fitxa DentalQuality de la clínica i a Topdoctors.
 * El que no està verificat es marca com a pendent i no es mostra com a fet.
 */
export const clinica = {
  name: 'Dental Clinic Sant Just',
  since: 1990,
  street: 'Carrer Marquès de Monistrol, 5',
  postalCode: '08960',
  city: 'Sant Just Desvern',
  region: 'Barcelona',
  /** Telèfon de la fitxa DentalQuality (també a la guia de l'Ajuntament de Barcelona). */
  phone: { display: '934 73 32 94', e164: '+34934733294' },
  /** Número de registre sanitari publicat a la fitxa DentalQuality. */
  registreSanitari: 'E08052070' as string | null,
  google: { rating: '5,0', count: 35 },
  boxes: 4,
  idiomes: ['Castellano', 'Català', 'English'],
  mutues: ['Aresa', 'Mutua Madrileña', 'Allianz', 'AXA Winterthur Salud', 'Cigna Salud'],
  director: {
    name: 'Dr. Carles Gargallo Gállego',
    colegiado: 'COEC 3947',
    cargo: 'Director de la clínica',
    formacion: [
      'Licenciado en Odontología por la Universitat Internacional de Catalunya.',
      'Postgrado en Estética Dental Avanzada (Societat Catalana d’Odontoestomatologia).',
      'Diploma Universitario Internacional en Implantología y tejidos duros y blandos (IMOI).',
      'Especialista en cirugía plástica periodontal y periimplantaria.',
      'Miembro de la SCOE y de la Sociedad Española de Prótesis Estomatológica y Estética (SEPES).',
    ],
  },
} as const;

export const telUrl = `tel:${clinica.phone.e164}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Dental Clinic Sant Just, ${clinica.street}, ${clinica.city}`)}`;

/** Especialitats que la clínica té publicades. */
export const tratamientos = [
  'Odontología preventiva',
  'Odontología conservadora',
  'Endodoncia',
  'Periodoncia',
  'Implantología',
  'Prótesis dental',
  'Cirugía oral y maxilofacial',
  'Ortodoncia',
  'Ortodoncia invisible',
  'Estética dental',
  'Blanqueamiento dental',
  'Odontopediatría',
] as const;
