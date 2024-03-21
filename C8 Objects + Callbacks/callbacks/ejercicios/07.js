function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:

  let newArray = []; // Nuevo arreglo para almacenar los elementos que comienzan con "a"

  // Iterar sobre cada elemento del arreglo
  for (let i = 0; i < arrayOfStrings.length; i++) {
    // Verificar si el elemento comienza con la letra "a"
    if (arrayOfStrings[i][0].toLowerCase() === "a") {
      newArray.push(arrayOfStrings[i]); // Agregar el elemento al nuevo arreglo
    }
  }
  // Retornar el nuevo arreglo con los elementos que comienzan con "a"
  return newArray;
}

module.exports = filter;
