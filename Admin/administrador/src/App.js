import "./styles.Clientes.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Clientes from "./cliente/src/Clientes";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/productos").then((response) => {
      setProductos(response.data);
    });
  }, []);


  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "user" && password === "user") {
      setLoggedIn(true);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/create", {
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        stock: stock,
      })
      .then(() => {
        alert("Producto agregado correctamente");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <div id="admin-login">
          <form onSubmit={handleLogin}>
            <label>
              Usuario:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Contraseña:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">Iniciar sesión como administrador</button>
          </form>
        </div>
      ) : (
        <>
          <div className="datos">
            <form onSubmit={handleSubmit}>
              <label>
                Nombre:
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </label>
              <label>
                Categoría:
                <input
                  type="text"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                />
              </label>
              <label>
                Precio:
                <input
                  type="number"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                />
              </label>
              <label>
                Stock:
                <input
                  type="number"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </label>
              <button type="submit">Registrar</button>
            </form>
          </div>
          
        </>
      )}
      <Clientes />
    </div>
  );
}

export default App;
