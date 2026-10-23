# Checklist de experiencia de usuario (UX) — pasada por ronda

Resumen en palabras propias de principios de usabilidad reconocidos (ver `CREDITS.md` para las fuentes originales). En cada ronda se recorre el prototipo con estas preguntas.

## 1. Heurísticas de usabilidad (basadas en las 10 heurísticas de Jakob Nielsen, NN/g)
- [ ] **Estado visible:** después de cada acción la persona ve qué pasó (aviso, cambio en la lista, contador).
- [ ] **Su idioma, no el del sistema:** palabras del dominio de quien usa la app; nada de jerga técnica ni códigos internos.
- [ ] **Salida y deshacer:** siempre hay forma de cancelar, volver o deshacer sin perder trabajo.
- [ ] **Consistencia:** lo mismo se llama igual y se ve igual en todas las pantallas; se respetan convenciones conocidas.
- [ ] **Prevenir errores:** valores por defecto sensatos, opciones limitadas a las válidas, confirmación en lo irreversible.
- [ ] **Reconocer antes que recordar:** las opciones están a la vista; no hay que acordarse de nada de una pantalla a otra.
- [ ] **Flexibilidad:** quien usa la app todos los días tiene atajos (búsqueda, acciones en lote, teclado).
- [ ] **Despojado:** cada elemento en pantalla ayuda a la tarea; lo secundario va al detalle.
- [ ] **Errores que ayudan:** el mensaje dice qué pasó, en lenguaje simple, y cómo seguir.
- [ ] **Ayuda en contexto:** una pista breve donde la tarea lo pide, no un manual aparte.

## 2. Leyes de UX (basadas en Laws of UX, Jon Yablonski)
- [ ] **Hick:** pocas opciones por paso; las tareas largas se parten en pasos.
- [ ] **Fitts:** la acción principal es grande y está cerca de donde la persona mira o apoya el pulgar.
- [ ] **Jakob:** se usan patrones que la gente ya conoce de otras apps antes que inventar.
- [ ] **Proximidad y región común:** lo que va junto se agrupa con espacio o un fondo compartido.
- [ ] **Miller / carga cognitiva:** listas largas se agrupan; no se pide memorizar códigos.
- [ ] **Doherty:** la respuesta se siente inmediata (< 0,4 s); si algo tarda, se muestra progreso (en el prototipo, simulado).
- [ ] **Pico-final:** el momento más importante y el final del flujo (confirmación) están cuidados.
- [ ] **Tesler:** la complejidad que no se puede eliminar la absorbe el sistema, no la persona.

## 3. Accesibilidad (basada en WCAG 2.2, W3C, nivel AA)
- [ ] Perceptible: contraste suficiente, textos alternativos en imágenes con contenido, información que no depende solo del color.
- [ ] Operable: todo con teclado, orden de foco lógico, foco visible y no tapado, áreas de clic suficientes.
- [ ] Comprensible: etiquetas e instrucciones en los campos, errores identificados con sugerencia, navegación consistente, no pedir de nuevo datos ya cargados.
- [ ] Robusto: HTML semántico (encabezados, listas, `button`, `label`), nombres accesibles en controles con solo ícono.

## 4. Recorrido con clics (el prototipo se usa como producto)
- [ ] Cada flujo de la spec se completa de punta a punta haciendo clic.
- [ ] Cada botón responde: navega, cambia el estado simulado o muestra un aviso concreto de lo que haría (no un «esto no hace nada» genérico).
- [ ] Cada ítem del menú lleva a su propia vista; ninguno repite a otro.
- [ ] Las listas tienen varias entidades en estados distintos, más vista de vacío y de error.
- [ ] Se probó al ancho real de la persona y en móvil si la app se usa en el celular.

## 5. Cierre de la pasada
Anotar en `iteraciones.md`, sección «Pasada de calidad» de la ronda: qué se revisó, qué falló y qué se corrigió.
