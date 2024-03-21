const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  let totalPropiedades = 0; // Variable para contar el total de propiedades

  for (let propiedad in objeto) {
    if (objeto.hasOwnProperty(propiedad)) {
      // Verificar si la propiedad es propia del objeto
      totalPropiedades++; // Incrementar el contador de propiedades
    }
  }

  return totalPropiedades; // Retornar el total de propiedades
};

module.exports = contarPropiedades;
