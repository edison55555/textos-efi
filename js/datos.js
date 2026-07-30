/* ============================================================
   DATOS.JS
   Aquí se edita TODO el contenido de la página: el nombre del
   sitio, los datos de contacto y la lista de textos disponibles.
   No es necesario tocar index.html, estilos.css ni app.js.

   Para agregar un texto nuevo:
   1) Copia la carpeta del PDF dentro de /pdfs
   2) Copia un objeto de ejemplo dentro del arreglo LIBROS (abajo)
   3) Cambia sus datos y guarda el archivo
   ============================================================ */

const CONFIG = {
  nombreSitio: "Cancha Compartida",
  eslogan: "Acervo de textos de Educación Física y Deportes",
  // Texto breve que explica el propósito del repositorio (hero)
  mision:
    "Cada promoción de las ESFM produce textos de graduación valiosos que" +
    " normalmente quedan en manos de una sola persona. Esta es una cancha" +
    " común: un lugar donde esos textos se comparten entre maestras y" +
    " maestros de Educación Física y Deportes de toda Bolivia.",
  // Datos de contacto del equipo que administra el repositorio
  contacto: {
    nombre: "Equipo coordinador — EDITAR AQUÍ",
    correo: "contacto@canchacompartida.edu.bo",
    telefono: "+591 700 00000",
    whatsapp: "59170000000", // solo números, con código de país, sin +
    institucion: "ESFM — EDITAR AQUÍ",
    ciudad: "Bolivia"
  }
};

/* Categorías temáticas ("carriles"). Cada una tiene un color de
   carril que se usa como franja de color en las tarjetas y en los
   filtros. Puedes agregar o quitar categorías libremente; solo
   asegúrate de que el "id" de cada libro coincida con un id de aquí. */
const CATEGORIAS = [
  { id: "didactica",       nombre: "Didáctica y metodología",        color: "var(--cancha)" },
  { id: "psicomotricidad", nombre: "Psicomotricidad",                 color: "var(--cancha)" },
  { id: "deporte-escolar", nombre: "Deporte escolar y competencia",   color: "var(--pista)" },
  { id: "recreacion",      nombre: "Recreación y vida al aire libre", color: "var(--pista)" },
  { id: "evaluacion",      nombre: "Evaluación y currículo",          color: "var(--cancha)" },
  { id: "inclusiva",       nombre: "Educación física inclusiva",      color: "var(--medalla)" },
  { id: "gestion",         nombre: "Gestión y salud escolar",         color: "var(--medalla)" }
];

/* Catálogo de textos. Estos 4 son EJEMPLOS de muestra: bórralos o
   reemplázalos por los textos reales. El campo "archivo" debe
   coincidir exactamente con el nombre del PDF dentro de /pdfs. */
const LIBROS = [
  {
    id: "lib-001",
    titulo: "Estrategias lúdicas para el desarrollo psicomotriz en primaria",
    categoria: "psicomotricidad",
    anio: 2023,
    esfm: "ESFM Simón Bolívar — EJEMPLO",
    autores: [
      { nombre: "Nombre Apellido", correo: "autor1@ejemplo.bo", telefono: "+591 7XX XXXXX" }
    ],
    resumen:
      "Propuesta de secuencias didácticas basadas en el juego para" +
      " fortalecer el esquema corporal y la coordinación en niños de" +
      " primer ciclo de primaria, aplicable al PSP de la unidad educativa.",
    palabrasClave: ["psicomotricidad", "juego", "primaria"],
    archivo: "estrategias-ludicas-psicomotricidad.pdf",
    paginas: 96
  },
  {
    id: "lib-002",
    titulo: "Diseño curricular de campeonatos intercursos como espacio formativo",
    categoria: "deporte-escolar",
    anio: 2022,
    esfm: "ESFM Enrique Finot — EJEMPLO",
    autores: [
      { nombre: "Nombre Apellido", correo: "autor2@ejemplo.bo", telefono: "+591 7XX XXXXX" }
    ],
    resumen:
      "Modelo de organización de campeonatos escolares que integra" +
      " contenidos curriculares de reglamento, arbitraje y trabajo en" +
      " equipo, pensado para secundaria comunitaria productiva.",
    palabrasClave: ["deporte escolar", "campeonatos", "secundaria"],
    archivo: "diseno-curricular-campeonatos.pdf",
    paginas: 112
  },
  {
    id: "lib-003",
    titulo: "Educación física adaptada: orientaciones para la inclusión real en aula",
    categoria: "inclusiva",
    anio: 2024,
    esfm: "ESFM Riberalta — EJEMPLO",
    autores: [
      { nombre: "Nombre Apellido", correo: "autor3@ejemplo.bo", telefono: "+591 7XX XXXXX" }
    ],
    resumen:
      "Guía práctica con adaptaciones curriculares y de materiales para" +
      " trabajar Educación Física con estudiantes con discapacidad" +
      " motriz y sensorial en aulas regulares.",
    palabrasClave: ["inclusión", "discapacidad", "adaptaciones"],
    archivo: "educacion-fisica-adaptada.pdf",
    paginas: 84
  },
  {
    id: "lib-004",
    titulo: "Evaluación por criterios en Educación Física: instrumentos para el aula",
    categoria: "evaluacion",
    anio: 2021,
    esfm: "ESFM Warisata — EJEMPLO",
    autores: [
      { nombre: "Nombre Apellido", correo: "autor4@ejemplo.bo", telefono: "+591 7XX XXXXX" },
      { nombre: "Segundo Autor", correo: "autor5@ejemplo.bo", telefono: "+591 7XX XXXXX" }
    ],
    resumen:
      "Batería de rúbricas y listas de cotejo alineadas al currículo" +
      " base, orientadas a evaluar procesos y no solo resultados en las" +
      " clases de Educación Física.",
    palabrasClave: ["evaluación", "rúbricas", "currículo"],
    archivo: "evaluacion-por-criterios-ef.pdf",
    paginas: 70
  }
];
