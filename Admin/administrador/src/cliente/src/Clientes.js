import React, { useState, useEffect } from "react";
import axios from "axios";
import Productos from "./components/Productos.js";
import Carrito from "./components/Carrito.js";

function Clientes() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function obtenerProductos() {
      const response = await axios.get("http://localhost:3001/productos");
      setProductos(response.data);
    }
    obtenerProductos();
  }, []);

  const agregarAlCarrito = (producto) => {
    const index = carrito.findIndex((p) => p.id === producto.id);
    if (index >= 0) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito[index].cantidad++;
      setCarrito(nuevoCarrito);
      setTotal((prevTotal) => prevTotal + producto.precio);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
      setTotal((prevTotal) => prevTotal + producto.precio);
    }
  };

  const eliminarDelCarrito = (producto) => {
    const index = carrito.findIndex((p) => p.id === producto.id);
    if (index >= 0) {
      const nuevoCarrito = [...carrito];
      if (nuevoCarrito[index].cantidad === 1) {
        nuevoCarrito.splice(index, 1);
      } else {
        nuevoCarrito[index].cantidad--;
      }
      setCarrito(nuevoCarrito);
      setTotal((prevTotal) => prevTotal - producto.precio);
    }
  };

  return (
    <div className="Clientes">
      <header>
        <h1>Iara Market Place</h1>
      </header>
      <main>
        <Productos productos={productos} agregarAlCarrito={agregarAlCarrito} />
        <Carrito
          carrito={carrito}
          setCarrito={setCarrito}
          total={carrito.length > 0 ? carrito.reduce((acc, curr) => acc + curr.precio * curr.cantidad, 0) : 0}
          setTotal={setTotal}
          eliminarDelCarrito={eliminarDelCarrito}
        />
      </main>
    </div>
  );
}

export default Clientes;
