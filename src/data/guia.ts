/**
 * Guia orientativa: símptoma → especialitat de la clínica. No diagnostica ni promet resultats.
 * `zona` indica què s'il·lumina al dibuix de la boca.
 */
export type Zona = 'molar' | 'encia' | 'falta' | 'frontal' | 'infantil';
export interface Sintoma { readonly id: string; readonly pregunta: string; readonly zona: Zona; readonly especialidades: readonly string[]; readonly texto: string }

export const sintomas: readonly Sintoma[] = [
  {
    id: 'dolor', zona: 'molar', pregunta: 'Me duele una muela al masticar o con el frío',
    especialidades: ['Odontología conservadora', 'Endodoncia'],
    texto: 'Puede ser una caries o un problema en el nervio del diente. Cuanto antes se mira, más sencillo suele ser el tratamiento.',
  },
  {
    id: 'encias', zona: 'encia', pregunta: 'Me sangran o me duelen las encías',
    especialidades: ['Periodoncia', 'Odontología preventiva'],
    texto: 'El sangrado de encías es un aviso habitual. Se revisa el estado de la encía y del hueso que sujeta los dientes.',
  },
  {
    id: 'falta', zona: 'falta', pregunta: 'Me falta una pieza',
    especialidades: ['Implantología', 'Prótesis dental'],
    texto: 'Hay varias formas de reponer un diente. Se valora cuál encaja en tu caso según el hueso y las piezas vecinas.',
  },
  {
    id: 'alinear', zona: 'frontal', pregunta: 'Quiero alinear los dientes',
    especialidades: ['Ortodoncia', 'Ortodoncia invisible'],
    texto: 'La clínica tiene un box propio de ortodoncia y cefalometrías, así que el estudio se hace aquí mismo.',
  },
  {
    id: 'estetica', zona: 'frontal', pregunta: 'Quiero mejorar el color o la forma',
    especialidades: ['Estética dental', 'Blanqueamiento dental'],
    texto: 'Primero se comprueba que dientes y encías estén sanos; después se habla de qué se puede cambiar y cómo.',
  },
  {
    id: 'peques', zona: 'infantil', pregunta: 'Es para mi hijo o mi hija',
    especialidades: ['Odontopediatría', 'Odontología preventiva'],
    texto: 'Revisiones adaptadas a cada edad para seguir cómo salen los dientes y prevenir problemas.',
  },
];
