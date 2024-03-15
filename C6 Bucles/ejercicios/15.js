function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:

  switch (numero) {
    case 1:
      return "Lunes".charAt(0).toUpperCase() + "unes";
    case 2:
      return "Martes".charAt(0).toUpperCase() + "artes";
    case 3:
      return "Miércoles".charAt(0).toUpperCase() + "iercoles";
    case 4:
      return "Jueves".charAt(0).toUpperCase() + "ueves";
    case 5:
      return "Viernes".charAt(0).toUpperCase() + "iernes";
    case 6:
      return "Sábado".charAt(0).toUpperCase() + "abado";
    case 7:
      return "Domingo".charAt(0).toUpperCase() + "omingo";
    default:
      return "No es un dia de la semana";
  }
}

module.exports = obtenerDiaSemana;
