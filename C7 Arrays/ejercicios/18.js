function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var sumanotas = 0;

  for (let i = 0; i < resultadosTest.length; i++) {
    sumanotas += resultadosTest[i];
  }
  promedio = sumanotas / resultadosTest.length;
  return promedio;
}

module.exports = promedioResultadosTest;
