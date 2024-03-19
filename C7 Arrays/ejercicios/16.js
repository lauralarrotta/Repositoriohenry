function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  var nuevoArreglo = [];

  for (var i = 0; i < array.length; i++) {
    nuevoArreglo.push(array[i] * i);
  }
  return nuevoArreglo;
}

module.exports = multiplicarElementosPorIndice;
