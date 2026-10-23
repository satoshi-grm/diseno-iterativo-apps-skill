---
name: diseno-iterativo-apps
description: "Usar cuando alguien quiere idear, diseñar o rediseñar una app o sistema y verlo funcionando ANTES de programarlo. Arma un prototipo HTML clickeable (todas las pantallas enlazadas, datos de ejemplo, sin backend), lo itera ronda por ronda con la persona registrando cada decisión, cierra una spec única (pantallas finales + requisitos funcionales, datos, roles, integraciones y criterios de aceptación) y recién cuando la persona dice que la propuesta está cerrada genera el prompt para que un agente de código construya la app. Una sola app por vez, hasta terminarla. Disparadores: «quiero armar una app», «mostrame cómo se vería el sistema», «diseñemos las pantallas», «hagamos un prototipo», «iteremos el diseño», «ya está, construila»."
version: 0.1.0
author: satoshi-grm
license: MIT
platforms: [linux, macos, windows]
metadata:
  tags: [diseño, ux, ui, prototipo, spec, iteracion, handoff]
  related_skills: [design-proposals]
---

# Diseño iterativo de apps: ver, ajustar, cerrar y recién ahí construir

Esta skill convierte una idea en una **propuesta cerrada** que la persona ya recorrió con el mouse antes de que exista una línea de código real. El entregable de diseño es siempre un **prototipo HTML clickeable**: HTML y CSS estáticos, un poco de JavaScript solo para navegar y simular estado, datos de ejemplo inventados y todas las pantallas enlazadas, de modo que se pueda hacer clic en cada flujo como si el sistema ya existiera. No hay backend, no hay APIs reales, no hay base de datos.

El ciclo tiene cuatro etapas y un principio que manda sobre todas:

> **Una sola app por vez.** Se itera una aplicación hasta terminarla antes de pasar a la siguiente. Nunca se deja una a medias.

Funciona con cualquier agente que pueda leer y escribir archivos (Claude Code, Codex, Cursor, Grok Bot u otro). Todo vive en archivos de texto dentro del repo del proyecto, así que dos agentes y una persona pueden trabajar sobre la misma propuesta.

## Cuándo se usa
- La persona quiere una app, un sistema interno, un panel o un rediseño y todavía no está claro cómo se ve ni cómo se usa.
- Pide «mostrame cómo quedaría», «armame las pantallas», «un prototipo», «quiero verlo antes de pagar el desarrollo».
- Hay una propuesta a medio iterar y llega una ronda nueva de comentarios.
- **No** se usa para un arreglo chico en una app que ya existe, ni para construir directo sin propuesta cerrada.

## Estilo por defecto
Si la persona no pidió otra cosa: **moderno, estilo lienzo, minimalista, fácil de usar y no genérico**. En concreto: fondo claro tipo papel, mucho aire, una sola tipografía bien elegida (máximo dos), un solo color de acento, jerarquía por tamaño y peso antes que por cajas y colores, pocas tarjetas, nada de adornos de IA promedio (degradés violetas, vidrio esmerilado, filas de números gigantes, tarjetas dentro de tarjetas, emojis como íconos, «Lorem ipsum»). La marca del cliente, si existe, manda sobre este estilo.

## Estructura de archivos (por app)
Todo dentro del repo del proyecto, en `diseno/<app>/` (kebab-case):

```
diseno/
  <app>/
    ESTADO.md               # estado de la app: diseño / iterando / cerrada / construyendo / terminada
    spec.md                 # LA fuente única: pantallas finales + requisitos
    iteraciones.md          # changelog de rondas, feedback y decisiones
    prototipo/              # el prototipo clickeable (se abre con doble clic en index.html)
      index.html            # mapa de pantallas y flujos, enlaza a todo
      tokens.css            # colores, tipografía, espacios, radios (un solo lugar)
      app.css               # componentes compartidos
      app.js                # navegación + estado simulado (localStorage)
      datos.js              # datos de ejemplo inventados
      pantallas/*.html      # una página por pantalla
    propuestas/             # (opcional) cuadernillo de direcciones visuales de design-proposals
    prompt-construccion.md  # se genera SOLO cuando la propuesta está cerrada
```

Las plantillas de todos estos archivos están en `templates/` de este repo, incluido un prototipo de ejemplo en `templates/prototipo/`.

## Regla de una app por vez (antes de empezar cualquier cosa)
1. Buscá todos los `diseno/*/ESTADO.md` del proyecto (y de otros proyectos que la persona mencione).
2. Si alguno está en `diseño`, `iterando`, `cerrada` o `construyendo`, **no empieces otra app**. Decile a la persona cuál está abierta, en qué estado y qué falta, y ofrecé seguir con esa.
3. Solo si la persona dice explícitamente que quiere abrir otra igual («pausala», «empezá la otra igual»), anotá en el `ESTADO.md` de la abierta `pausada por pedido de la persona: <fecha> — <motivo>` y recién ahí arrancá la nueva.
4. Cada cambio de estado se escribe en `ESTADO.md` con fecha y quién lo cambió. Los estados válidos y su orden: `diseño → iterando → cerrada → construyendo → terminada`.

## Etapa 1 — Vista rápida de todo el sistema (estado: `diseño`)
Objetivo: en la primera entrega la persona ve **el sistema completo**, no una pantalla suelta.

1. **Entender en pocas preguntas.** Leé todo el material que haya (notas, audios transcritos, capturas, sitio actual). Armá cuatro listas: hechos, supuestos, contradicciones, huecos. Preguntá solo lo que bloquea (máximo 3 a 5 preguntas). Lo demás se resuelve con un supuesto anotado en `spec.md`.
2. **Usuarios y tareas.** Quién usa la app, para qué tarea, con qué frecuencia, en qué dispositivo. Un rol = una lista de tareas.
3. **Mapa de pantallas y flujos.** Listá todas las pantallas (incluidos vacíos, errores, login, configuración) y los flujos principales como recorridos paso a paso («Recepcionista carga un turno: Inicio → Turnos → Nuevo → Confirmación → Turnos»). Esto va a `spec.md` y al `index.html` del prototipo.
4. **Dirección visual.** Si ya hay un sitio, una app o capturas, primero sacá de ahí colores, tipografías y componentes reales (por ejemplo con la skill `anydesign` de uxKero) y respetalos. Si el aspecto no está decidido, usá la skill **design-proposals** (https://github.com/satoshi-grm/design-proposals-skill): cuadernillo con 3 a 8 direcciones visuales aplicadas a 3 o 4 pantallas reales, con `design.md` y `tokens.css` por dirección, chequeos medidos (contraste AA, texto ≥ 12 px, nada recortado) y una recomendación firme. Guardalo en `propuestas/`. La persona elige (o mezcla) y el `tokens.css` elegido pasa a `prototipo/tokens.css`. Si no tenés esa skill, proponé 2 o 3 direcciones como variantes de `tokens.css` y mostrá la misma pantalla con cada una.
5. **Prototipo clickeable.** Copiá `templates/prototipo/` a `diseno/<app>/prototipo/` y construí **todas** las pantallas del mapa:
   - una página HTML por pantalla, todas enlazadas desde la navegación y desde `index.html`;
   - datos de ejemplo creíbles e imperfectos en `datos.js` (nombres largos, campos vacíos, un error, varios estados), los mismos en todas las pantallas; nada de «Lorem ipsum», «Juan Pérez» o «Acme»;
   - cada botón responde: navega, cambia el estado simulado o muestra un aviso concreto de lo que haría en la app real; ningún botón muerto, ningún ítem de menú que lleve al mismo lugar que otro;
   - cada lista tiene lista, detalle, vacío y error;
   - nada de backend, `fetch` a APIs, login real ni datos reales de personas.
6. **Revisión antes de mostrar** (ver «Pasada de calidad por ronda» abajo). Abrí el prototipo, recorrelo haciendo clic, capturá las pantallas al ancho real de la persona y miralas.
7. **Entrega.** Decí cómo abrirlo («doble clic en `diseno/<app>/prototipo/index.html`»), resumí en 5 líneas qué hay y hacé **una sola pregunta concreta** («¿Arrancamos ajustando el flujo de carga o la pantalla de inicio?»). Pasá `ESTADO.md` a `iterando`.

## Etapa 2 — Bucle de iteración (estado: `iterando`)
Cada ronda sigue los mismos pasos. Una ronda = una entrada en `iteraciones.md`.

1. **Recibir el feedback** de la persona tal cual lo dijo y anotarlo en la ronda nueva de `iteraciones.md` con un ID (`F-<ronda>.<n>`), sin reinterpretarlo.
2. **Traducirlo a cambios concretos**: qué pantalla, qué elemento, qué cambia. Si algo es ambiguo, proponé la interpretación más probable y aplicala; no frenes la ronda por una duda menor.
3. **Conservar lo que gustó.** Cambiá solo lo señalado. No oscilar entre extremos ni rediseñar lo aprobado.
4. **Aplicar en el prototipo** (visual y de flujo) y, si cambia un requisito, en `spec.md` en el mismo paso. El prototipo y la spec nunca se contradicen.
5. **Pasada de calidad** (abajo): UI, UX, accesibilidad y recorrido con clics.
6. **Registrar decisiones** en `iteraciones.md`: cada feedback queda `aplicado`, `descartado (motivo)` o `pendiente (pregunta)`. Las decisiones firmes se copian al registro de decisiones de `spec.md`.
7. **Mostrar** el antes/después de lo que cambió (capturas o enlaces a las pantallas tocadas) y hacer una sola pregunta para la ronda siguiente.

La persona puede pedir otra ronda las veces que quiera. Si después de 3 rondas el mismo punto sigue volviendo, mostrá dos alternativas lado a lado en vez de una tercera versión.

### Pasada de calidad por ronda
Se hace en cada ronda, antes de mostrar. Las listas completas están en `references/checklist-ui.md` y `references/checklist-ux.md`; el resumen:

- **Límites medibles (no se negocian):** texto que hay que leer ≥ 12 px y contraste ≥ 4,5:1 (≥ 3:1 en texto ≥ 24 px); áreas de toque ≥ 44×44 px en pantallas táctiles y ≥ 24×24 px con mouse; nada recortado ni superpuesto, sin scroll horizontal desde 320 px; campos con etiqueta, todo usable con teclado con foco visible, zoom nunca bloqueado.
- **Heurísticas de usabilidad:** estado del sistema visible, lenguaje de la persona usuaria, salida y deshacer, consistencia, prevención de errores, reconocer antes que recordar, atajos para quien usa mucho, diseño despojado, mensajes de error que dicen qué pasó y cómo seguir, ayuda donde hace falta.
- **Leyes de UX:** pocas opciones por paso (Hick), objetivos importantes grandes y cerca (Fitts), agrupar lo relacionado (proximidad y región común), respuesta en menos de 0,4 s (simulada en el prototipo), patrones conocidos antes que inventos (Jakob).
- **Recorrido con clics:** cada flujo de `spec.md` se recorre de punta a punta en el prototipo; cada botón responde; cada ítem del menú lleva a su propia vista; se miran vacíos y errores.
- **Hábitos de IA genérica:** revisar la lista de prohibidos de `references/checklist-ui.md`.

Anotá el resultado en la ronda («Pasada de calidad: 0 fallas» o la lista de lo corregido).

## Etapa 3 — Cierre (estado: `cerrada`)
La propuesta se cierra **solo cuando la persona lo dice explícitamente** («está cerrada», «aprobado, construila», «listo, así va»). Un «me gusta» no es cierre: preguntá «¿La damos por cerrada para construir?».

Al cerrar:
1. Completá `spec.md` (plantilla `templates/spec.md`): resumen, roles y permisos, mapa de pantallas con enlace a cada HTML del prototipo, flujos, requisitos funcionales numerados (`RF-01`…), modelo de datos (entidades, campos, relaciones, validaciones), integraciones (qué, para qué, y qué se simuló en el prototipo), requisitos no funcionales (dispositivos, accesibilidad, rendimiento, idioma), **criterios de aceptación verificables** por requisito, fuera de alcance, supuestos y registro de decisiones.
2. Verificá la cobertura: cada pantalla del prototipo aparece en la spec y cada requisito tiene al menos una pantalla o se declara sin interfaz.
3. Congelá la versión: anotá en `ESTADO.md` `cerrada: <fecha>, versión <n>` y en `iteraciones.md` la ronda de cierre. Si hay Git, un commit `diseño: propuesta <app> cerrada v<n>`.
4. Desde acá, cualquier cambio de diseño reabre la propuesta (`iterando`) y se registra como ronda nueva.

## Etapa 4 — Construcción con IA (estado: `construyendo` → `terminada`)
Recién con la propuesta cerrada:
1. Generá `prompt-construccion.md` con la plantilla `templates/prompt-construccion.md`, completada desde `spec.md` (no inventes nada que no esté en la spec).
2. El prompt se entrega a un agente de código (Codex, Claude Code, Cursor u otro). Ese agente usa el prototipo como **referencia visual exacta**: copia disposición, tokens y componentes; no reinterpreta.
3. Pasá `ESTADO.md` a `construyendo`, con el agente y la fecha.
4. La app se acepta contra los criterios de aceptación de la spec, en la app real (no en el prototipo). Lo que falle vuelve al agente constructor con la lista concreta.
5. Cuando la persona acepta, `ESTADO.md` pasa a `terminada`. Recién ahí se puede abrir la siguiente app.

## Colaboración entre dos agentes
Dos agentes (por ejemplo, Grok Bot y Codex, o dos instancias de cualquier agente) pueden iterar juntos sobre la misma propuesta usando solo los archivos del repo. Reglas:

| Archivo | Quién lo edita |
|---|---|
| `prototipo/` | Solo el **agente de turno** (el que tiene la ronda). |
| `spec.md` | Solo el agente de turno, en el mismo paso que el prototipo. |
| `iteraciones.md` | Los dos, pero cada uno **solo agrega** entradas firmadas; nadie borra ni reescribe lo de otro. |
| `ESTADO.md` | El agente de turno: estado, turno y fecha. |
| `prompt-construccion.md` | Quien cierre la propuesta, después de que la persona la cerró. |

1. **Turno.** `ESTADO.md` tiene un campo `turno: <agente>`. Solo el agente de turno toca prototipo y spec. Al terminar su ronda, pasa el turno (`turno: <otro agente>` o `turno: persona`).
2. **Feedback entre agentes.** El agente que no tiene el turno revisa el prototipo y escribe en la sección «Feedback de agentes» de la ronda en curso, con formato `- [A-<ronda>.<n>] (<agente>) <pantalla>: <observación> → <propuesta concreta>`. El agente de turno responde en la misma línea con `aplicado`, `descartado (motivo)` o `consultar a la persona`.
3. **La persona manda.** El feedback de la persona (`F-…`) siempre gana sobre el de un agente (`A-…`). Un agente nunca cierra la propuesta ni arranca la construcción por su cuenta.
4. **Sin pisarse.** Si hay Git: una rama o un commit por ronda (`diseño(<app>): ronda <n>`), `git pull` antes de empezar, sin force-push. Si no hay Git: leer `ESTADO.md` antes de editar y no tocar nada si el turno es del otro.
5. **Reparto sugerido.** Un agente construye y ajusta el prototipo; el otro hace la pasada de calidad (UI, UX, accesibilidad, recorrido con clics) y propone mejoras. Pueden alternarse por ronda.

## Qué no hacer
- Programar la app real, conectar APIs o crear una base de datos antes del cierre.
- Mostrar pantallas sueltas o descripciones en vez del prototipo: las propuestas se ven, no se describen.
- Entregar un prototipo con botones muertos, menús repetidos o listas de un solo elemento.
- Empezar una segunda app con otra abierta sin el permiso explícito de la persona.
- Usar datos reales de personas o clientes en el prototipo, o meter claves y secretos en cualquier archivo.

## Créditos
Esta skill se apoya en la skill `design-proposals` y resume en palabras propias principios de diseño de interfaces y de experiencia de usuario de fuentes reconocidas (uxKero, Nielsen Norman Group, Laws of UX, W3C WCAG, Vercel). Detalle, enlaces y licencias en `CREDITS.md`.
