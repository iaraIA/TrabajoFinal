import React from "react";

const Carrito = ({ carrito, setCarrito, total, setTotal }) => {
  const eliminarProducto = (id, cantidad) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
    setTotal((prevTotal) => prevTotal - cantidad);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setTotal(0);
  };

  const agregarProducto = (producto) => {
    const productoExistente = carrito.find((p) => p.id === producto.id);
    if (productoExistente) {
      const nuevoCarrito = carrito.map((p) =>
        p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
      );
      setCarrito(nuevoCarrito);
      setTotal((prevTotal) => prevTotal + producto.precio);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
      setTotal((prevTotal) => prevTotal + producto.precio);
    }
  };

  const restarProducto = (producto) => {
    const productoExistente = carrito.find((p) => p.id === producto.id);
    if (productoExistente.cantidad === 1) {
      eliminarProducto(producto.id, productoExistente.precio);
    } else {
      const nuevoCarrito = carrito.map((p) =>
        p.id === producto.id ? { ...p, cantidad: p.cantidad - 1 } : p
      );
      setCarrito(nuevoCarrito);
      setTotal((prevTotal) => prevTotal - productoExistente.precio);
    }
  };

  return (
    <div className="carrito">
      <h2>Tu carrito de compras</h2>

      {carrito?.length === 0 || !carrito ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>
                  <button onClick={() => restarProducto(producto)}>-</button>
                  {producto.cantidad}
                  <button onClick={() => agregarProducto(producto)}>+</button>
                </td>
                <td>${(producto.cantidad * producto.precio).toFixed(2)}</td>
                <td>
                  <button
                    onClick={() =>
                      eliminarProducto(producto.id, producto.cantidad)
                    }
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Total:</td>
              <td>${total.toFixed(2)}</td>
              <td>
                <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Carrito;
