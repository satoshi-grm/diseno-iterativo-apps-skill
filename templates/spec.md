# Spec: <nombre-de-la-app>

> Fuente única de verdad. El prototipo y esta spec nunca se contradicen.
> Versión: <n> · Estado: <ver ESTADO.md> · Cerrada el: <AAAA-MM-DD o "abierta">

## 1. Resumen
- Problema (quién sufre qué): <1-2 frases>
- Qué hace la app: <1-2 frases>
- Éxito se mide por: <indicador concreto>

## 2. Roles y permisos
| Rol | Tareas principales | Puede ver | Puede editar | No puede |
|---|---|---|---|---|
| <rol> | <tareas> | <...> | <...> | <...> |

## 3. Mapa de pantallas
| ID | Pantalla | Archivo del prototipo | Roles | Estados cubiertos |
|---|---|---|---|---|
| P-01 | Inicio | `prototipo/pantallas/inicio.html` | todos | con datos / vacío |

## 4. Flujos
- **FL-01 <nombre>** (<rol>): P-01 → P-02 → P-03 → resultado: <qué queda hecho>

## 5. Requisitos funcionales
| ID | Requisito | Pantallas | Prioridad (debe/debería/podría) |
|---|---|---|---|
| RF-01 | <la persona usuaria puede ...> | P-02 | debe |

## 6. Datos
### Entidades
| Entidad | Campo | Tipo | Obligatorio | Validación / regla |
|---|---|---|---|---|
| <Entidad> | <campo> | <texto/número/fecha/...> | sí/no | <regla> |

### Relaciones
- <Entidad A> 1—N <Entidad B>: <explicación>

## 7. Integraciones
| Sistema | Para qué | Dirección (lee/escribe) | Cómo se simuló en el prototipo |
|---|---|---|---|
| <servicio> | <uso> | <...> | <aviso / datos fijos> |

## 8. Requisitos no funcionales
- Dispositivos y anchos: <ej. escritorio 1440 y 1920 px, móvil 390 px>
- Accesibilidad: WCAG 2.2 nivel AA (contraste, teclado, foco visible, etiquetas, zoom)
- Idioma y formato: <es-AR, fechas DD/MM/AAAA, moneda>
- Rendimiento: <ej. respuesta percibida < 0,4 s en acciones comunes>
- Seguridad y privacidad: <autenticación, datos sensibles, auditoría>

## 9. Sistema visual
- Tokens: `prototipo/tokens.css` (referencia exacta para la construcción)
- Dirección elegida: <nombre> (si se usó design-proposals: `propuestas/<...>/design.md`)

## 10. Criterios de aceptación
| ID | Requisito | Dado / Cuando / Entonces |
|---|---|---|
| CA-01 | RF-01 | Dado <contexto>, cuando <acción>, entonces <resultado verificable> |

## 11. Fuera de alcance
- <lo que explícitamente no se hace en esta versión>

## 12. Supuestos y preguntas abiertas
- Supuesto: <...> (confirmar con la persona)

## 13. Registro de decisiones
| ID | Fecha | Decisión | Ronda / origen |
|---|---|---|---|
| D-1.1 | <AAAA-MM-DD> | <...> | Ronda 1, F-1.1 |
