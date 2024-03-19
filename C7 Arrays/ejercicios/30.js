function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  let diccionario = {};

  for (let i = 0; i < numeros.length; i++) {
    if (diccionario[numeros[i]] !== undefined) {
      return numeros[i];
    } else {
      diccionario[numeros[i]] = true;
    }
  }
}

module.exports = encontrarElementoRepetido;
