// app.js — SOLO navegación y estado simulado. Sin backend, sin APIs, sin fetch.
// El estado vive en localStorage del navegador; "Reiniciar demo" lo borra.
(function () {
  var CLAVE = "prototipo-demo-v1";

  function cargar() {
    try { var s = localStorage.getItem(CLAVE); if (s) return JSON.parse(s); } catch (e) {}
    return JSON.parse(JSON.stringify(window.DATOS_INICIALES));
  }
  function guardar(d) { try { localStorage.setItem(CLAVE, JSON.stringify(d)); } catch (e) {} }

  var datos = cargar();

  window.Proto = {
    datos: datos,
    guardar: function () { guardar(datos); },
    reiniciar: function () { try { localStorage.removeItem(CLAVE); } catch (e) {} location.reload(); },
    param: function (n) { return new URLSearchParams(location.search).get(n); },
    turno: function (id) { return datos.turnos.find(function (t) { return t.id === id; }); },
    fecha: function (iso) { var p = iso.split("-"); return p[2] + "/" + p[1] + "/" + p[0]; },
    estado: function (e) { return '<span class="estado ' + e + '">' + e.charAt(0).toUpperCase() + e.slice(1) + "</span>"; },
    esc: function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); },
    // Aviso: describe lo que haría la app real. Nunca "esto no hace nada".
    avisar: function (texto) {
      var a = document.getElementById("aviso");
      if (!a) { a = document.createElement("div"); a.id = "aviso"; a.className = "aviso"; a.setAttribute("role", "status"); document.body.appendChild(a); }
      a.textContent = texto; a.hidden = false;
      clearTimeout(a._t); a._t = setTimeout(function () { a.hidden = true; }, 3500);
    }
  };

  // Mensaje pendiente entre pantallas (por ejemplo, "Turno creado").
  document.addEventListener("DOMContentLoaded", function () {
    var m = sessionStorage.getItem("prototipo-aviso");
    if (m) { sessionStorage.removeItem("prototipo-aviso"); Proto.avisar(m); }
    document.querySelectorAll("[data-aviso]").forEach(function (b) {
      b.addEventListener("click", function () { Proto.avisar(b.getAttribute("data-aviso")); });
    });
    document.querySelectorAll("[data-reiniciar]").forEach(function (b) {
      b.addEventListener("click", Proto.reiniciar);
    });
  });
})();
