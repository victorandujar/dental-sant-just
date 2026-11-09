# Dental Clinic Sant Just — propuesta web

> **Propuesta de diseño no oficial** preparada por Web Local Growth. No es la web oficial de la clínica.

| | |
|---|---|
| **Cliente potencial** | Dental Clinic Sant Just · Carrer Marquès de Monistrol, 5, 08960 Sant Just Desvern · Dr. Carles Gargallo Gállego (COEC 3947) · desde 1990 |
| **Objetivo** | Darle su primera web propia. Hoy solo aparece en directorios (DentalQuality, Topdoctors) |
| **Alcance** | Página única: portada, guía "¿Qué notas?", doctor, tratamientos, la clínica, información práctica y cita; aviso legal y privacidad |
| **Estado** | Demo terminada · `PUBLIC_IS_DEMO=true` |

## Identidad: "Odontograma"

El elemento central es el lenguaje propio de los dentistas: el **odontograma**, el mapa de las 32 piezas con la numeración FDI (11–18, 21–28, 31–38, 41–48).
- **Tipografía:** Schibsted Grotesk para todo (titulares, texto y rótulos), autoalojada.
- **Formas:** botones redondeados, tarjetas y fotos con esquinas suaves, y secciones claras, para que el conjunto se vea limpio y tranquilo.
- **Color:** paleta clínica y luminosa: blanco `#F9FCFD`, agua clara `#E8F4F7`, azul principal `#0F6B85` (cumple AA con blanco) y texto en azul tinta `#12303B`. Las encías del odontograma en rosa real `#F4D5D2`. Sin rojo, que en salud evoca sangre o alarma. La clínica no tiene colores de marca publicados.
- **Logotipo provisional:** la etiqueta "11·21" (los dos incisivos centrales) en una píldora azul. A sustituir si la clínica tiene logo.
- **Fotos:** las de la clínica, a tamaño moderado y con cartela (son de 650 px).

## Funcionalidades

- **Odontograma en la portada** (`Odontograma.astro` + `src/scripts/odontograma.ts`):
  - Las 32 piezas se dibujan una a una al cargar.
  - Al pasar el ratón, tocar o enfocar con el teclado una pieza, el lector muestra su número y nombre ("36 · Primer molar inferior izquierdo").
  - Mientras nadie interactúa, recorre algunas piezas solo. Se detiene con movimiento reducido o al tocarlo.
- **"¿Qué notas?"** (`Guia.astro`):
  - El mismo odontograma resalta la zona: molares, incisivos y caninos, encías, la pieza 36 ausente o los dientes de leche.
  - Muestra qué especialidad lo trata, y "Pedir cita para esto" deja el motivo en el formulario.
  - Es un radiogroup ARIA que funciona con flechas, con el aviso de que es orientativo.
- **Formulario "que me llamen":** validado. En la demo no envía nada y lo dice; en producción, un endpoint de Astro mandará la solicitud al correo de la clínica.
- **SEO:** JSON-LD `Dentist`, sitemap, Open Graph; `noindex` en modo demo.

## Publicidad sanitaria (lo que se ha respetado)

- **Sin testimonios de pacientes:** solo la nota agregada de Google.
- **Sin precios, promociones ni promesas de resultados.**
- **Número de registro sanitario:** visible en el pie, pendiente de que lo facilite la clínica.
- **Textos prudentes:** orientativos y sin afirmaciones médicas.

## Fuentes y pendientes

- **Datos y fotos:** ficha pública de la clínica en dentalq.es y Topdoctors.
- **Pendientes:**
  - Confirmar el teléfono 937 02 04 75 (lo publica un directorio).
  - Horario.
  - Email para el formulario.
  - Titular, NIF y nº de registro sanitario.
  - Fotos actuales en más resolución.
  - Autorización para usar el retrato del doctor y las fotos.
- **Versión en catalán:** recomendable (Sant Just Desvern) y se puede añadir con la misma estructura que en SERIN.

## Calidad

| | Resultado |
|---|---|
| `astro check` / `astro build` | 0 errores · 0 avisos |
| Lighthouse móvil (producción) | **99 · 100 · 100 · 100** · LCP 1,7 s · CLS 0 |
| Lighthouse escritorio | 100 · 100 · 100 · 100 |
| Pruebas | Odontograma (ratón, teclado, lectura), las 6 zonas de la guía, motivo al formulario, validación, rutas legales, sin scroll horizontal |

## Ejecutar

```bash
npm install
npm run dev
npm run build
```

En Vercel: importar el repo (raíz por defecto) y añadir `PUBLIC_IS_DEMO=true`.
