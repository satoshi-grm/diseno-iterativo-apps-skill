# Prompt de construcción: <nombre-de-la-app>

> Generar SOLO cuando ESTADO.md dice `cerrada`. Completar desde spec.md; no agregar nada que no esté en la spec.
> Pegar este texto entero al agente de código (Codex, Claude Code, Cursor u otro).

---

Vas a construir la app **<nombre>** a partir de una propuesta de diseño ya cerrada y aprobada. No rediseñes: el prototipo es la referencia visual exacta.

## Fuentes (leer todo antes de escribir código)
- Spec: `diseno/<app>/spec.md` (requisitos, datos, roles, integraciones, criterios de aceptación).
- Prototipo clickeable: `diseno/<app>/prototipo/` (abrir `index.html`). Cada pantalla de la spec enlaza su HTML.
- Tokens visuales: `diseno/<app>/prototipo/tokens.css`. Usalos tal cual (colores, tipografía, espacios, radios).
- Decisiones: `diseno/<app>/iteraciones.md` (para entender por qué algo es como es).

## Stack
- <stack elegido o "proponé uno simple y justificalo en 3 líneas antes de empezar">
- Restricciones: <hosting, base de datos, presupuesto, integraciones obligatorias>

## Qué construir
- Pantallas: todas las de la sección 3 de la spec, con la misma disposición, componentes y textos que el prototipo.
- Requisitos funcionales: RF-01 … RF-<n> (sección 5).
- Modelo de datos: sección 6, con sus validaciones.
- Roles y permisos: sección 2, aplicados en el servidor, no solo ocultando botones.
- Integraciones: sección 7. Lo que el prototipo simulaba ahora es real; credenciales por variables de entorno, nunca en el código.

## Reglas
- Lo que el prototipo simulaba con `datos.js` y `localStorage` pasa a datos reales; no dejes datos de ejemplo en producción.
- Si algo de la spec es ambiguo o imposible, no inventes: anotalo en `docs/preguntas.md` y seguí con lo demás.
- Fuera de alcance: sección 11. No lo agregues.
- Accesibilidad WCAG 2.2 AA; sin scroll horizontal desde 320 px; foco visible; campos con etiqueta.
- Commits chicos y descriptivos. Sin force-push. Sin secretos en el repo.

## Entrega
1. App corriendo localmente con instrucciones en `README.md`.
2. Tests o verificación de cada criterio de aceptación (sección 10): tabla CA-xx → cómo se comprobó → resultado.
3. Capturas de cada pantalla al lado de la del prototipo, a los anchos de la sección 8.
4. Lista de diferencias con el prototipo (debería estar vacía) y preguntas abiertas.
