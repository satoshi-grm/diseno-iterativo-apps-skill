# Estado: <nombre-de-la-app>

estado: diseño            # diseño | iterando | cerrada | construyendo | terminada
turno: <agente o persona>  # quién puede editar prototipo y spec ahora
version_propuesta: 0
actualizado: <AAAA-MM-DD>

## Qué falta para el próximo estado
- <una o dos líneas>

## Historial
| Fecha | Estado | Quién | Nota |
|---|---|---|---|
| <AAAA-MM-DD> | diseño | <agente> | Arranque: vista rápida del sistema |

<!--
Reglas:
- Una sola app abierta por vez (estado distinto de "terminada").
- Si la persona pide pausar esta app para abrir otra, agregar al historial:
  "pausada por pedido de la persona — <motivo>". Sin ese pedido explícito, no se abre otra.
- "cerrada" solo cuando la persona lo dijo explícitamente.
-->
