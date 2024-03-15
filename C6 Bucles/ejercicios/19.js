function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:

  var Suma = 1;

  for (var i = 1; i <= n; i++) {
    Suma = Suma + i;
  }
  return Suma;
}

module.exports = sumarHastaN;
