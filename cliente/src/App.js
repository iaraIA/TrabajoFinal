import React, { useState } from "react";
import "/CSS/styles.css";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";

function App() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Producto 1", precio: 100 },
    { id: 2, nombre: "Producto 2", precio: 200 },
    { id: 3, nombre: "Producto 3", precio: 300 }
  ]);

  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

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
    <div className="App">
      <header>
        <h1>Tienda Online</h1>
      </header>
      <main>
        <Productos productos={productos} agregarAlCarrito={agregarAlCarrito} />
        <Carrito
          carrito={carrito}
          setCarrito={setCarrito}
          total={total}
          setTotal={setTotal}
          eliminarDelCarrito={eliminarDelCarrito}
        />
      </main>
    </div>
  );
}

export default App;
