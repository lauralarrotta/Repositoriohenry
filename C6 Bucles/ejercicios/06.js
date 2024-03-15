function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  var CantidaddeDigitos = num.toString().length;

  if (CantidaddeDigitos === 3) {
    return true;
  } else return false;
}

module.exports = tieneTresDigitos;
