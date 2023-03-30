import './App.css';
import { useState } from 'react';
import axios from "axios";

function App() {

  const [nombre,setnombre] = useState("");
  const [categoria,setcategoria] = useState("");
  const [precio,setprecio] = useState(0);
  const [stock,setstock] = useState(0);

  const mostrarDatos = ()=>{
    axios.post("http://localhost:3001/create", {
      nombre:nombre,
      categoria:categoria,
      precio:precio,
      stock:stock
    }).then(()=>{
      alert("Producto Agregado correctamente");
    });
  }




  return (
    <div className="App">
      <div className="datos">
        <label>Nombre: <input 
        onChange={(event)=>{
          setnombre(event.target.value);
        }}
        type="text"></input></label>
        <label>Categoria: <input 
        onChange={(event)=>{
          setcategoria(event.target.value);
        }}
        type="text"></input></label>
        <label>Precio: <input 
        onChange={(event)=>{
          setprecio(event.target.value);
        }} 
        type="number"></input></label>
        <label>Stock: <input 
        onChange={(event)=>{
          setstock(event.target.value);
        }} 
        type="number"></input></label>
        <button onClick={mostrarDatos}>Registrar</button>    
      </div>
    </div>
  );
}

export default App;
