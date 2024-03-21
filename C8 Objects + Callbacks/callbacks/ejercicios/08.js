const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:

  // Iterar sobre cada elemento del array
  for (let i = 0; i < array.length; i++) {
    // Llamar al callback con el elemento actual y verificar si retorna true
    if (callback(array[i])) {
      return array[i]; // Retornar el elemento si fue encontrado
    }
  }

  // Si no se encontró el elemento, devolver el mensaje
  return "No se encontró el elemento";
};

module.exports = buscarElemento;
