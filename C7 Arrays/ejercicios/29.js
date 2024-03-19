function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0) {
    return null; // Retorna null si el array es vacío
  }

  let min = Math.min(...numeros); // Encontrar el valor mínimo en el array
  let max = Math.max(...numeros); // Encontrar el valor máximo en el array

  // Calcular la suma de la secuencia completa usando la fórmula de la suma de una secuencia aritmética
  let sumaSecuenciaCompleta = ((min + max) * (max - min + 1)) / 2;

  // Calcular la suma real del array
  let sumaRealArray = numeros.reduce((acc, num) => acc + num, 0);

  // Calcular el número faltante restando la suma de la secuencia completa menos la suma real del array
  let numeroFaltante = sumaSecuenciaCompleta - sumaRealArray;

  if (numeroFaltante === 0) {
    return null; // Retorna null si no hay números faltantes
  }

  return numeroFaltante;
}

module.exports = encontrarNumeroFaltante;
