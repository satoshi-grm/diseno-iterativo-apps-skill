# Checklist de interfaz (UI) — pasada por ronda

Resumen en palabras propias de criterios de diseño de interfaces de fuentes reconocidas (ver `CREDITS.md`). Se marca cada punto en cada ronda; lo que falla se corrige antes de mostrar.

## 1. Orden para decidir cuando dos criterios chocan
1. Lo que pidió la persona explícitamente.
2. El sistema de diseño o la marca que ya existe.
3. Los límites medibles (abajo): no tienen excepciones.
4. Lo que la persona usuaria necesita lograr.
5. La idea visual elegida para esta app.
6. Los valores por defecto de esta skill (estilo lienzo).

## 2. Límites medibles
- [ ] Texto que hay que leer: ≥ 12 px; contraste ≥ 4,5:1 (≥ 3:1 si el texto mide ≥ 24 px o es negrita grande).
- [ ] Componentes de interfaz y bordes de campos: contraste ≥ 3:1 contra el fondo.
- [ ] Áreas de clic: ≥ 24×24 px con mouse; ≥ 44×44 px en táctil.
- [ ] Nada recortado, superpuesto ni desbordado en los anchos objetivo; sin scroll horizontal desde 320 px.
- [ ] Texto e íconos centrados verticalmente dentro de botones, chips, pestañas y campos; controles de una misma fila con la misma altura.
- [ ] Cada campo tiene etiqueta visible; todo se opera con teclado; el foco se ve; el zoom no está bloqueado.
- [ ] Los estados (activo, error, pendiente) no dependen solo del color: llevan ícono o texto.

## 3. Composición
- [ ] Un punto focal claro por pantalla: lo que la persona viene a hacer se ve primero.
- [ ] Jerarquía por tamaño, peso y espacio antes que por cajas, bordes y colores.
- [ ] Lo relacionado está junto; lo distinto, separado (espacio antes que líneas).
- [ ] Una escala de espacios (4/8 px) y una de tipos (pocas medidas) usadas de forma consistente.
- [ ] La pantalla es la que el producto necesita, no una plantilla de panel genérico.
- [ ] Usa el ancho real de la persona: sin grandes vacíos a la derecha en monitores de 1920 px.

## 4. Estilo lienzo (por defecto)
- [ ] Fondo claro tipo papel, superficies apenas diferenciadas, mucho aire.
- [ ] Una tipografía principal (dos como máximo), legible, con números tabulares en tablas.
- [ ] Un solo color de acento, usado para la acción principal y el estado activo.
- [ ] Pocas tarjetas; nunca tarjetas dentro de tarjetas.
- [ ] Íconos de una sola familia (por ejemplo Lucide, licencia ISC), nunca emojis como íconos.

## 5. Hábitos de interfaces genéricas hechas por IA (evitar)
Usarlos solo si la persona lo pide o hay una razón que se pueda nombrar:
- Acentos y degradés violeta/índigo; paletas de un solo tono; fondo oscuro con acento neón.
- Texto con degradé, brillos, paneles de vidrio, manchas difusas, fondos de grilla o puntos.
- Borde fino + sombra ancha y suave en todo.
- Cada sección envuelta en una tarjeta redondeada; filas de tarjetas idénticas con ícono en un cuadrado de color.
- Filas de números gigantes con una leyenda que repite el número.
- Héroe centrado con una insignia arriba del título; etiquetas en mayúsculas espaciadas sobre cada título.
- Insignias en metadatos comunes; un subtítulo descriptivo bajo cada título; un saludo como texto principal de una herramienta.
- Animaciones de entrada en cada sección, puntos que laten, marquesinas, zoom al pasar el mouse.
- Palabras de moda y eslóganes en los textos.

Nunca:
- Franja de color a un costado de una tarjeta para marcarla.
- Marcos de dispositivo dibujados, barras de estado falsas o ventanas de navegador falsas alrededor de la pantalla.
- Emojis en lugar de íconos.
- «Lorem ipsum», «Juan Pérez», «John Doe», «Acme»: los datos de ejemplo son creíbles y del dominio.

## 6. Detalles de interfaz web
- [ ] Los enlaces son enlaces (`<a>`) y las acciones son botones (`<button>`).
- [ ] Estados de hover, foco, activo y deshabilitado definidos para cada control.
- [ ] Las acciones destructivas piden confirmación o permiten deshacer.
- [ ] Los formularios conservan lo escrito ante un error y marcan el campo con el problema.
- [ ] Textos largos y números grandes no rompen la disposición (probar con datos extremos).
- [ ] El título de la pestaña del navegador dice en qué pantalla se está.
