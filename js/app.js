/* ============================================================
   APP.JS
   Lógica de la página. No necesitas editar este archivo para
   agregar textos nuevos: eso se hace en datos.js.
   ============================================================ */

(function () {
  "use strict";

  const estado = {
    busqueda: "",
    categoria: "todas",
    orden: "recientes"
  };

  const mapaCategorias = new Map(CATEGORIAS.map((c) => [c.id, c]));

  const $grid = document.getElementById("grid-libros");
  const $contador = document.getElementById("contador-resultados");
  const $buscador = document.getElementById("buscador");
  const $chips = document.getElementById("chips-categorias");
  const $orden = document.getElementById("orden-select");
  const $vacio = document.getElementById("estado-vacio");
  const $limpiar = document.getElementById("btn-limpiar");
  const plantilla = document.getElementById("plantilla-tarjeta");

  const prefiereMenosMovimiento = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* -------------------- Personalización desde CONFIG -------------------- */
  function aplicarConfig() {
    document.title = `${CONFIG.nombreSitio} · ${CONFIG.eslogan}`;
    document
      .querySelectorAll("[data-config]")
      .forEach((el) => {
        const ruta = el.getAttribute("data-config").split(".");
        let valor = CONFIG;
        ruta.forEach((paso) => (valor = valor ? valor[paso] : undefined));
        if (valor === undefined) return;
        if (el.tagName === "A") {
          if (el.dataset.tipo === "correo") el.href = `mailto:${valor}`;
          if (el.dataset.tipo === "telefono") el.href = `tel:${valor.replace(/\s+/g, "")}`;
          if (el.dataset.tipo === "whatsapp") el.href = `https://wa.me/${valor}`;
          el.textContent = el.dataset.texto || valor;
        } else {
          el.textContent = valor;
        }
      });
    document.getElementById("anio-actual").textContent = new Date().getFullYear();
  }

  /* -------------------- Construcción de filtros -------------------- */
  function construirChips() {
    const total = document.createElement("button");
    total.className = "chip chip--activo";
    total.type = "button";
    total.textContent = `Todas (${LIBROS.length})`;
    total.dataset.id = "todas";
    $chips.appendChild(total);

    CATEGORIAS.forEach((cat) => {
      const cantidad = LIBROS.filter((l) => l.categoria === cat.id).length;
      if (cantidad === 0) return;
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip";
      chip.style.setProperty("--carril", cat.color);
      chip.textContent = `${cat.nombre} (${cantidad})`;
      chip.dataset.id = cat.id;
      $chips.appendChild(chip);
    });

    $chips.addEventListener("click", (ev) => {
      const boton = ev.target.closest(".chip");
      if (!boton) return;
      estado.categoria = boton.dataset.id;
      [...$chips.querySelectorAll(".chip")].forEach((c) =>
        c.classList.toggle("chip--activo", c === boton)
      );
      render();
    });
  }

  /* -------------------- Filtrado + orden -------------------- */
  function obtenerResultado() {
    const q = estado.busqueda.trim().toLowerCase();

    let lista = LIBROS.filter((libro) => {
      const enCategoria =
        estado.categoria === "todas" || libro.categoria === estado.categoria;
      if (!enCategoria) return false;
      if (!q) return true;

      const autores = libro.autores.map((a) => a.nombre).join(" ");
      const claves = libro.palabrasClave.join(" ");
      const bolsa = `${libro.titulo} ${autores} ${claves} ${libro.esfm}`.toLowerCase();
      return bolsa.includes(q);
    });

    lista.sort((a, b) => {
      if (estado.orden === "recientes") return b.anio - a.anio;
      if (estado.orden === "antiguos") return a.anio - b.anio;
      if (estado.orden === "titulo") return a.titulo.localeCompare(b.titulo, "es");
      return 0;
    });

    return lista;
  }

  /* -------------------- Render de una tarjeta -------------------- */
  function crearTarjeta(libro) {
    const nodo = plantilla.content.firstElementChild.cloneNode(true);
    const cat = mapaCategorias.get(libro.categoria);

    nodo.style.setProperty("--carril", cat ? cat.color : "var(--linea)");
    nodo.querySelector(".tarjeta__categoria").textContent = cat ? cat.nombre : "General";
    nodo.querySelector(".tarjeta__titulo").textContent = libro.titulo;
    nodo.querySelector(".tarjeta__anio").textContent = libro.anio;
    nodo.querySelector(".tarjeta__esfm").textContent = libro.esfm;
    nodo.querySelector(".tarjeta__resumen").textContent = libro.resumen;

    const autoresEl = nodo.querySelector(".tarjeta__autores");
    libro.autores.forEach((autor, i) => {
      const item = document.createElement("li");
      const contactos = [];
      if (autor.correo) contactos.push(`<a href="mailto:${autor.correo}">${autor.correo}</a>`);
      if (autor.telefono) contactos.push(`<a href="tel:${autor.telefono.replace(/\s+/g, "")}">${autor.telefono}</a>`);
      item.innerHTML = `<span class="tarjeta__autor-nombre">${autor.nombre}</span>${
        contactos.length ? ` <span class="tarjeta__autor-contacto">· ${contactos.join(" · ")}</span>` : ""
      }`;
      autoresEl.appendChild(item);
    });

    const meta = nodo.querySelector(".tarjeta__meta-extra");
    const piezas = [];
    if (libro.paginas) piezas.push(`${libro.paginas} pág.`);
    piezas.push("PDF");
    meta.textContent = piezas.join(" · ");

    const boton = nodo.querySelector(".btn-descarga");
    boton.href = `pdfs/${libro.archivo}`;
    boton.setAttribute("download", "");

    return nodo;
  }

  /* -------------------- Render principal -------------------- */
  function render() {
    const resultado = obtenerResultado();
    $grid.innerHTML = "";

    $contador.textContent =
      resultado.length === 1
        ? "1 texto encontrado"
        : `${resultado.length} textos encontrados`;

    $vacio.hidden = resultado.length !== 0;

    resultado.forEach((libro, indice) => {
      const tarjeta = crearTarjeta(libro);
      if (!prefiereMenosMovimiento) {
        tarjeta.style.setProperty("--retraso", `${Math.min(indice, 8) * 40}ms`);
        tarjeta.classList.add("tarjeta--entrando");
      }
      $grid.appendChild(tarjeta);
    });

    if (!prefiereMenosMovimiento) requestAnimationFrame(activarEntrada);
  }

  function activarEntrada() {
    document.querySelectorAll(".tarjeta--entrando").forEach((el) => {
      el.classList.add("tarjeta--visible");
    });
  }

  /* -------------------- Estadísticas del hero -------------------- */
  function calcularEstadisticas() {
    const autoresUnicos = new Set();
    LIBROS.forEach((l) => l.autores.forEach((a) => autoresUnicos.add(a.nombre)));
    const categoriasUsadas = new Set(LIBROS.map((l) => l.categoria));

    document.getElementById("stat-textos").textContent = LIBROS.length;
    document.getElementById("stat-temas").textContent = categoriasUsadas.size;
    document.getElementById("stat-autores").textContent = autoresUnicos.size;
  }

  /* -------------------- Eventos -------------------- */
  function eventos() {
    let temporizador;
    $buscador.addEventListener("input", (ev) => {
      clearTimeout(temporizador);
      temporizador = setTimeout(() => {
        estado.busqueda = ev.target.value;
        render();
      }, 150);
    });

    $orden.addEventListener("change", (ev) => {
      estado.orden = ev.target.value;
      render();
    });

    $limpiar.addEventListener("click", () => {
      estado.busqueda = "";
      estado.categoria = "todas";
      $buscador.value = "";
      [...$chips.querySelectorAll(".chip")].forEach((c) =>
        c.classList.toggle("chip--activo", c.dataset.id === "todas")
      );
      render();
    });
  }

  /* -------------------- Inicio -------------------- */
  function iniciar() {
    aplicarConfig();
    calcularEstadisticas();
    construirChips();
    eventos();
    render();
  }

  document.addEventListener("DOMContentLoaded", iniciar);
})();
