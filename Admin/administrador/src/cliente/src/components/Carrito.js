import React from "react";

const Carrito = ({ carrito, setCarrito, total, setTotal }) => {
  const eliminarProducto = (id, cantidad, precio) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
    setTotal((prevTotal) => prevTotal - cantidad * precio);
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
  } else {
    setCarrito([...carrito, { ...producto, cantidad: 1 }]);
  }
  setTotal(carrito.reduce((acc, p) => acc + p.cantidad * p.precio, 0));
};

  

const restarProducto = (producto) => {
  const productoExistente = carrito.find((p) => p.id === producto.id);
  if (productoExistente.cantidad === 1) {
    eliminarProducto(producto.id, productoExistente.cantidad, producto.precio);
  } else {
    const nuevoCarrito = carrito.reduce((acc, p) => {
      if (p.id === producto.id) {
        acc.push({ ...p, cantidad: p.cantidad - 1 });
      } else {
        acc.push(p);
      }
      return acc;
    }, []);
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
                      eliminarProducto(producto.id, producto.cantidad, producto.precio)
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
              <td>${typeof total === 'number' ? total.toFixed(2) : '0.00'}</td>
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
