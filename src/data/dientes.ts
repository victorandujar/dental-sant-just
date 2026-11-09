/**
 * Numeració FDI (la que fan servir els dentistes): quadrant 1 superior dret,
 * 2 superior esquerre, 3 inferior esquerre, 4 inferior dret (dreta/esquerra del pacient).
 * Posició 1 = incisiu central … 8 = queixal del seny.
 */
export type Tipo = 'incisivo' | 'canino' | 'premolar' | 'molar';
export interface Pieza { readonly fdi: number; readonly q: 1 | 2 | 3 | 4; readonly pos: number; readonly tipo: Tipo; readonly nombre: string }

const NOM: Record<number, string> = {
  1: 'Incisivo central', 2: 'Incisivo lateral', 3: 'Canino', 4: 'Primer premolar',
  5: 'Segundo premolar', 6: 'Primer molar', 7: 'Segundo molar', 8: 'Tercer molar (muela del juicio)',
};
const tipo = (pos: number): Tipo => (pos <= 2 ? 'incisivo' : pos === 3 ? 'canino' : pos <= 5 ? 'premolar' : 'molar');
const lado = { 1: 'superior derecho', 2: 'superior izquierdo', 3: 'inferior izquierdo', 4: 'inferior derecho' } as const;

export const piezas: readonly Pieza[] = ([1, 2, 3, 4] as const).flatMap((q) =>
  [1, 2, 3, 4, 5, 6, 7, 8].map((pos) => ({ fdi: q * 10 + pos, q, pos, tipo: tipo(pos), nombre: `${NOM[pos]} ${lado[q]}` })),
);
