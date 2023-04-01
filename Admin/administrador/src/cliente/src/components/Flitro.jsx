import React from "react";

function Filtros() {
  return (
    <div>
      <label htmlFor="categoria">Filtrar por categoría:</label>
      <select id="categoria">
        <option value="">Todas</option>
        <option value="Electrónica">Electrónica</option>
        <option value="Ropa">Ropa</option>
        <option value="Alimentación">Alimentación</option>
        <option value="Hogar">Hogar</option>
      </select>
      <button>Ordenar por precio</button>
    </div>
  );
}

export default Filtros;
