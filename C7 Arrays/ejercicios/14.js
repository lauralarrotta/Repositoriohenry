function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  var temporal = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      temporal++;
    }
  }
  return temporal;
}

module.exports = contarElementosMayoresA10;
