function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var numerospares = array.filter((numero) => numero % 2 === 0);

  return numerospares;
}

module.exports = filtrarNumerosPares;
