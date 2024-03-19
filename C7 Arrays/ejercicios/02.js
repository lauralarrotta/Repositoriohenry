function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:

  var ultimoElemento = array[0];
  for (var i = 1; i < array.length; i++) {
    ultimoElemento = array[i];
  }
  return ultimoElemento;
}

module.exports = devolverUltimoElemento;
