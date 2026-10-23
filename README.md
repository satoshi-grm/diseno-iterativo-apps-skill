# Diseño iterativo de apps (skill para agentes de IA)

Una skill en español para que cualquier agente de IA (Claude Code, Codex, Cursor, Grok Bot u otro) te ayude a **ver y ajustar una app antes de programarla**, y recién cuando la propuesta está cerrada, la mande a construir.

## Qué hace
1. **Vista rápida de todo el sistema.** Arma un **prototipo HTML clickeable**: todas las pantallas enlazadas, datos de ejemplo inventados y botones que responden, para recorrer cada flujo como si la app existiera. Sin backend, sin APIs, sin base de datos. Si el aspecto visual no está decidido, usa la skill [design-proposals](https://github.com/satoshi-grm/design-proposals-skill) para mostrar de 3 a 8 direcciones visuales y elegir una.
2. **Iteración ronda por ronda.** Vos comentás, el agente ajusta pantallas y flujos, y cada cambio queda anotado en un changelog de decisiones (`iteraciones.md`). En cada ronda hace una pasada de calidad de interfaz, experiencia de usuario y accesibilidad.
3. **Cierre.** Cuando vos decís «está cerrada», todo queda en una sola spec (`spec.md`): pantallas finales, requisitos funcionales, datos, roles, integraciones y criterios de aceptación.
4. **Construcción con IA.** Recién ahí genera el prompt de construcción (`prompt-construccion.md`) para un agente de código, que usa el prototipo como referencia exacta.

## El principio: una app por vez
Se itera **una sola aplicación hasta terminarla** antes de pasar a la siguiente. Cada app tiene un archivo `ESTADO.md` con uno de estos estados:

`diseño → iterando → cerrada → construyendo → terminada`

Si hay una app abierta, el agente no empieza otra salvo que vos se lo pidas explícitamente.

## Estilo por defecto
Moderno, **estilo lienzo**, minimalista, fácil de usar y no genérico: fondo claro tipo papel, mucho aire, una tipografía, un solo color de acento, nada de adornos típicos de IA. Si tenés marca propia, manda la marca.

## Qué trae el repo
| Archivo | Para qué |
|---|---|
| `SKILL.md` | Las instrucciones para el agente (el corazón de la skill). |
| `templates/ESTADO.md` | Estado de la app y de quién es el turno. |
| `templates/spec.md` | Spec única: pantallas + requisitos + criterios de aceptación. |
| `templates/iteraciones.md` | Changelog de rondas, feedback y decisiones. |
| `templates/prompt-construccion.md` | Prompt para el agente que construye la app. |
| `templates/prototipo/` | Prototipo clickeable de ejemplo (mapa de pantallas, `tokens.css`, 5 pantallas enlazadas). |
| `references/checklist-ui.md` | Pasada de calidad de interfaz. |
| `references/checklist-ux.md` | Pasada de experiencia de usuario y accesibilidad. |
| `CREDITS.md` | Fuentes y licencias. |

## Probar el prototipo de ejemplo
Doble clic en `templates/prototipo/index.html`. O, desde una terminal:
```
cd templates/prototipo
python3 -m http.server 8000
```
y abrí `http://localhost:8000`.

## Instalación

**Claude Code**
```
git clone https://github.com/satoshi-grm/diseno-iterativo-apps-skill ~/.claude/skills/diseno-iterativo-apps
```
Claude Code detecta la skill por el `SKILL.md`. Pedile: «usá la skill diseno-iterativo-apps para diseñar mi app».

**Codex**
```
git clone https://github.com/satoshi-grm/diseno-iterativo-apps-skill ~/.codex/skills/diseno-iterativo-apps
```
Si tu versión de Codex no carga skills de carpeta, agregá en el `AGENTS.md` del proyecto: «Para diseñar apps seguí `~/.codex/skills/diseno-iterativo-apps/SKILL.md`».

**Cursor**
Cloná el repo dentro del proyecto (por ejemplo en `.cursor/skills/diseno-iterativo-apps`) y agregá una regla en `.cursor/rules/` que diga: «Para diseñar una app, seguí `.cursor/skills/diseno-iterativo-apps/SKILL.md`».

**Grok Bot u otro agente con acceso web**
Pasale este enlace y pedile que lo siga: `https://github.com/satoshi-grm/diseno-iterativo-apps-skill/blob/main/SKILL.md`. Puede copiar las plantillas desde `templates/`.

## Dos agentes sobre la misma propuesta
La skill permite que dos agentes iteren juntos usando solo los archivos del repo: uno tiene el turno y edita prototipo y spec; el otro revisa y deja feedback firmado en `iteraciones.md`. El turno se anota en `ESTADO.md`. Lo que vos decís siempre gana. Detalle en la sección «Colaboración entre dos agentes» de `SKILL.md`.

## Licencia
MIT. Ver `LICENSE` y `CREDITS.md`.
