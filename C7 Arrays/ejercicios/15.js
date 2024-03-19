function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice
  // Tu código:

  var indiceMasGrande = 0;

  for (var i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMasGrande]) {
      indiceMasGrande = i;
    }
  }

  return indiceMasGrande;
}

module.exports = encontrarIndiceMayor;
