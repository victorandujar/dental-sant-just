# Dental Clinic Sant Just — propuesta web

> **Propuesta de diseño no oficial** preparada por Web Local Growth. No es la web oficial de la clínica.

| | |
|---|---|
| **Cliente potencial** | Dental Clinic Sant Just · Carrer Marquès de Monistrol, 5, 08960 Sant Just Desvern · Dr. Carles Gargallo Gállego (COEC 3947) · desde 1990 |
| **Objetivo** | Darle su primera web propia. Hoy solo aparece en directorios (DentalQuality, Topdoctors) |
| **Alcance** | Página única: portada, guía "¿Qué notas?", doctor, tratamientos, la clínica, información práctica y cita; aviso legal y privacidad |
| **Estado** | Demo terminada · `PUBLIC_IS_DEMO=true` |

## Identidad: "La galería"

La clínica es blanca y minimalista, con luz natural, un cuadro rojo en el box y un suelo de cristal sobre cantos blancos. La web se plantea como una galería:
- **Fotos:** enmarcadas con passe-partout y una cartela al pie, como en una exposición.
- **Color:** el rojo del cuadro (`#C01E12`) como único acento, sobre blanco roto y gris tiza.
- **Tipografía:** Instrument Serif para titulares y Instrument Sans para el texto, autoalojadas.

Esto resuelve también el problema de las fotos, que son pequeñas (650 px): enmarcadas a tamaño moderado se ven intencionadas, no pobres.

## Funcionalidades

- **"¿Qué notas?"** (`Guia.astro` + `Boca.astro`):
  - Eliges un síntoma, un dibujo de la dentadura resalta la zona y se muestra qué especialidad lo trata en la clínica.
  - El botón "Pedir cita para esto" deja el motivo escrito en el formulario.
  - Es un radiogroup ARIA que funciona con flechas. Avisa de que es orientativo y de que el diagnóstico lo hace el dentista.
- **Formulario "que me llamen":** nombre, teléfono, motivo y consentimiento, con validación. En la demo no envía nada y lo dice. En producción, un endpoint de Astro mandará la solicitud al correo de la clínica.
- **SEO:** JSON-LD `Dentist` con dirección, año de fundación, idiomas, servicios y director; sitemap y Open Graph; `noindex` en modo demo.

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
| Lighthouse móvil (producción) | **100 · 100 · 100 · 100** · LCP 1,6 s · 124 KB |
| Lighthouse escritorio | 100 · 100 · 100 · 100 |
| Pruebas | Guía con ratón y teclado, motivo enviado al formulario, validación, rutas legales, sin scroll horizontal |

## Ejecutar

```bash
npm install
npm run dev
npm run build
```

En Vercel: importar el repo (raíz por defecto) y añadir `PUBLIC_IS_DEMO=true`.
