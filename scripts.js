let imagenActual = 0;

function mostrarSiguienteImagen() {
  const imagenes = document.querySelectorAll("#imageContainer img");

  // Oculta la imagen actual
  imagenes[imagenActual].classList.add("hidden");

  // Calcula el índice de la siguiente imagen
  imagenActual = (imagenActual + 1) % imagenes.length;

  // Muestra la siguiente imagen
  imagenes[imagenActual].classList.remove("hidden");
}
