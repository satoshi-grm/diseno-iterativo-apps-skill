# Prototipo clickeable (plantilla de ejemplo)

Ejemplo mínimo de la estructura que pide la skill: una app de turnos inventada, con 5 pantallas enlazadas, datos de ejemplo y estado simulado. Sin backend, sin APIs, sin instalar nada.

## Cómo abrirlo
- **Lo más simple:** doble clic en `index.html` (se abre en el navegador).
- **Con servidor local** (opcional, si el navegador limita archivos locales):
  ```
  cd prototipo
  python3 -m http.server 8000
  ```
  y abrir `http://localhost:8000`.
- Para volver a los datos iniciales: botón **Reiniciar demo** en el mapa de pantallas o en Ajustes.

## Estructura
| Archivo | Para qué |
|---|---|
| `index.html` | Mapa de pantallas y flujos para recorrer. Enlaza a todo. |
| `tokens.css` | Único lugar con colores, tipografía, espacios y radios. Cambiar de dirección visual = cambiar este archivo. |
| `app.css` | Componentes compartidos (navegación, botones, tablas, formularios, estados, avisos). Solo usa variables de `tokens.css`. |
| `app.js` | Navegación y estado simulado en `localStorage`. Nada de `fetch` ni servicios externos. |
| `datos.js` | Datos de ejemplo inventados, cargados como script para que funcione con doble clic. |
| `pantallas/*.html` | Una página por pantalla, con la misma navegación. |

## Reglas al adaptarlo a una app nueva
- Una pantalla de la spec = un archivo en `pantallas/`, con su enlace en la navegación y en `index.html`.
- Cada botón responde: navega, cambia el estado simulado o muestra con `data-aviso="..."` qué haría la app real.
- Cada lista tiene datos en varios estados, una vista vacía (`?vacio=1`) y un caso de error o «no encontrado».
- Datos creíbles del dominio y siempre inventados. Nunca datos reales de personas, ni claves, ni URLs internas.
- Si cambiás `datos.js`, subí la versión de `CLAVE` en `app.js` (`prototipo-demo-v2`) para que el navegador no use los datos viejos.
