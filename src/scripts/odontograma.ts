/**
 * Odontograma: en passar per sobre, tocar o enfocar una peça mostra el seu número
 * i nom al lector [data-lectura]. Al hero, mentre ningú no hi interactua, el mapa
 * va "revisant" peces soles (es para amb moviment reduït o en interactuar).
 */
export const initOdontograma = (root: HTMLElement, opts: { auto?: boolean } = {}): void => {
  const piezas = [...root.querySelectorAll<SVGGElement>('.pieza')];
  const lectura = document.querySelector<HTMLElement>(`[data-lectura="${root.dataset.odonto}"]`);
  const num = lectura?.querySelector<HTMLElement>('[data-num]');
  const nom = lectura?.querySelector<HTMLElement>('[data-nom]');
  let tocat = false;
  let timer = 0;

  const mostra = (g: SVGGElement): void => {
    piezas.forEach((p) => p.classList.toggle('is-on', p === g));
    if (num) num.textContent = g.dataset.fdi ?? '';
    if (nom) nom.textContent = g.dataset.nombre ?? '';
  };
  const usuari = (g: SVGGElement): void => {
    tocat = true;
    window.clearInterval(timer);
    mostra(g);
  };

  piezas.forEach((g) => {
    g.addEventListener('pointerenter', () => usuari(g));
    g.addEventListener('focus', () => usuari(g));
    g.addEventListener('click', () => usuari(g));
  });

  if (opts.auto && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ordre = [11, 21, 13, 16, 26, 36, 46, 33, 31, 41, 18, 28, 37, 47, 23, 14];
    let i = 0;
    window.setTimeout(() => {
      if (tocat) return;
      const pas = (): void => {
        if (tocat || document.hidden) return;
        const g = piezas.find((p) => p.dataset.fdi === String(ordre[i % ordre.length]));
        if (g) mostra(g);
        i++;
      };
      pas();
      timer = window.setInterval(pas, 1800);
    }, 2600);
  }
};
