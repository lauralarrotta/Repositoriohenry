function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:

  var resultado = "";

  for (var i = 0; i < palabras.length; i++) {
    resultado += palabras[i];
    if (i !== palabras.length - 1) {
      resultado += " ";
    }
  }

  return resultado;
}

module.exports = dePalabrasAFrase;
