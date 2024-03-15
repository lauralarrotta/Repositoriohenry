function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:

  var Suma = 0;

  for (var i = 1; i <= n; i++) {
    Suma = Suma + i;

    if (Suma >= 100) break;
  }
  return Suma;
}

module.exports = sumarHastaNConBreak;
