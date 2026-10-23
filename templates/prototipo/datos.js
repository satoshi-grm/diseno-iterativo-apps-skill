// datos.js — datos de ejemplo INVENTADOS. Nunca datos reales de personas.
// Se cargan como <script> (no con fetch) para que el prototipo abra con doble clic.
window.DATOS_INICIALES = {
  negocio: "Consultorio Alameda",
  profesionales: ["Dra. Valentina Ocampo", "Lic. Tomás Iturralde Benavídez"],
  turnos: [
    { id: "t1", paciente: "Lucía Ferreyra", profesional: "Dra. Valentina Ocampo", fecha: "2026-11-03", hora: "09:00", motivo: "Control anual", estado: "confirmado" },
    { id: "t2", paciente: "Martín Echeverría Saavedra", profesional: "Lic. Tomás Iturralde Benavídez", fecha: "2026-11-03", hora: "09:30", motivo: "Primera consulta: dolor lumbar desde hace tres semanas, trae estudios", estado: "pendiente" },
    { id: "t3", paciente: "Rocío Albarracín", profesional: "Dra. Valentina Ocampo", fecha: "2026-11-03", hora: "10:15", motivo: "", estado: "cancelado" },
    { id: "t4", paciente: "Ignacio Quiroga", profesional: "Dra. Valentina Ocampo", fecha: "2026-11-04", hora: "11:00", motivo: "Resultados de laboratorio", estado: "confirmado" },
    { id: "t5", paciente: "Camila Sosa", profesional: "Lic. Tomás Iturralde Benavídez", fecha: "2026-11-05", hora: "16:45", motivo: "Sesión 4 de 8", estado: "pendiente" }
  ]
};
