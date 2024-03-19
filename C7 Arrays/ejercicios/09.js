function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:

  if (array.length === 0) return undefined; // Si el arreglo está vacío, retorna undefined
  if (array.length === 1) return array[0]; // Si el arreglo tiene un solo elemento, devuelve ese elemento

  let numeros = array.filter((item) => typeof item === "number"); // Filtra solo los elementos que son números
  if (numeros.length === 0) return undefined; // Si no hay números en el arreglo, retorna undefined

  let indiceAleatorio = Math.floor(Math.random() * numeros.length); // Genera un índice aleatorio
  return numeros[indiceAleatorio];
}

module.exports = obtenerElementoAleatorio;
