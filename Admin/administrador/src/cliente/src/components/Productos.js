import React, { useState, useEffect } from "react";
import axios from "axios";

function Productos({ agregarAlCarrito }) {
  const [categoria, setCategoria] = useState("");
  const [orden, setOrden] = useState("asc");
  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3001/productos").then((response) => {
      setProductos(response.data);
    });
  }, []);



  let productosFiltrados = [...productos];

  if (categoria) {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.categoria === categoria
    );
  }

  productosFiltrados.sort((a, b) =>
    orden === "asc" ? a.precio - b.precio : b.precio - a.precio
  );

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleOrdenChange = (event) => {
    setOrden(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="categoria">Categoría:</label>
        <select
          id="categoria"
          value={categoria}
          onChange={handleCategoriaChange}
        >
          <option value="">Todas</option>
          <option value="frutas">Frutas</option>
          <option value="verduras">Verduras</option>
          <option value="carnes">Carnes</option>
          <option value="lacteos">Lácteos</option>
          <option value="panaderia">Panadería</option>
        </select>
      </div>
      <div>
        <label htmlFor="orden">Ordenar por:</label>
        <select id="orden" value={orden} onChange={handleOrdenChange}>
          <option value="asc">Precio ascendente</option>
          <option value="desc">Precio descendente</option>
        </select>
      </div>
      <div>
        {productosFiltrados.map((producto) => (
          <div key={producto.id}>
            <h2>{producto.nombre}</h2>
            <p>Categoría: {producto.categoria}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Stock disponible: {producto.stock}</p>
            <button onClick={() => agregarAlCarrito(producto)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
