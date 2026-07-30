/* ============================================================
   DATOS.JS
   Aquí se edita TODO el contenido de la página: el nombre del
   sitio, los datos de contacto y la lista de textos disponibles.
   No es necesario tocar index.html, estilos.css ni app.js.

   Para agregar un texto nuevo:
   1) Copia el PDF dentro de /pdfs y la imagen de portada dentro de /img
   2) Copia un objeto de ejemplo dentro del arreglo LIBROS (abajo)
   3) Cambia sus datos y guarda el archivo
   ============================================================ */

const CONFIG = {
  nombreSitio: "Cancha Compartida",
  eslogan: "Acervo de textos de Educación Física y Deportes",
  // Texto breve que explica el propósito del repositorio (hero)
  mision:
    "Un espacio para reunir y compartir textos, guías y materiales de" +
    " Educación Física y Deportes: una cancha común donde maestras y" +
    " maestros de toda Bolivia pueden encontrar y descargar recursos" +
    " para sus clases.",
  // Datos de contacto del equipo que administra el repositorio
  // EDITAR AQUÍ con los datos reales
  contacto: {
    nombre: "Equipo coordinador — EDITAR AQUÍ",
    correo: "edison67010759@gmail.com",
    telefono: "+591 78929262",
    whatsapp: "59178929262", // solo números, con código de país, sin +
    institucion: "RATUKI",
    ciudad: "Bolivia"
  }
};

/* Categorías temáticas ("carriles"). Cada una tiene un color de
   carril que se usa como acento en las tarjetas y en los filtros.
   Puedes agregar o quitar categorías libremente; solo asegúrate de
   que el "id" de cada libro coincida con un id de aquí. */
const CATEGORIAS = [
  { id: "iniciacion-deportiva", nombre: "Iniciación deportiva",         color: "var(--pista)" },
  { id: "didactica",            nombre: "Didáctica y metodología",      color: "var(--cancha)" },
  { id: "psicomotricidad",      nombre: "Psicomotricidad",              color: "var(--cancha)" },
  { id: "deporte-escolar",      nombre: "Deporte escolar y competencia",color: "var(--cielo)" },
  { id: "recreacion",           nombre: "Recreación y vida al aire libre", color: "var(--medalla)" },
  { id: "evaluacion",           nombre: "Evaluación y currículo",        color: "var(--cancha)" },
  { id: "inclusiva",            nombre: "Educación física inclusiva",   color: "var(--medalla)" },
  { id: "gestion",              nombre: "Gestión y salud escolar",      color: "var(--cielo)" }
];

/* Catálogo de textos. Por ahora hay un solo título real: los datos que
   faltan (autores adicionales, año) son PLACEHOLDERS marcados para que
   los completes tú mismo. Cada libro admite tantos autores como
   necesites: solo agrega o quita objetos dentro de "autores". */
const LIBROS = [
  {
    id: "lib-001",
    titulo: "Iniciación deportiva con Ratuki",
    categoria: "iniciacion-deportiva",
    anio: 2026, // EDITAR AQUÍ: año real de publicación
    portada: "img/iniciacion-deportiva-ratuki.png",
    // "esfm" se usa como subtítulo descriptivo bajo el título
    esfm: "4to año de escolaridad · Educación Primaria Comunitaria Vocacional",
    autores: [
      { nombre: "Edison Chambi Huarachi", correo: "edison67010759@gmail.com", telefono: "+59178929262" },
      { nombre: "Eddy Tarqui Gutierrez", correo: "edditarquigutierrez@gmail.com", telefono: "+59173534353" },
      { nombre: "Andres Fidel Flores Quispe", correo: "andresfidelpay@gmail.com", telefono: "+59170503794" }
    ],
    resumen: "Material de iniciación deportiva para acompañar a las y los estudiantes de cuarto año de primaria con ejercicios de multilateralidad utilizando diferentes tipos de balones. Subsistema de Educación Regular.",
    palabrasClave: ["iniciación deportiva", "ratuki", "primaria", "4to de primaria"],
    archivo: "iniciacion-deportiva-con-ratuki.pdf", // coloca el PDF con este nombre en /pdfs
    paginas: null // EDITAR AQUÍ si quieres mostrar el número de páginas
  }
];
