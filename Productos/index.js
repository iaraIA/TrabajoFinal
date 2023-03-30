const express = require("express");
const app =  express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Jezabel911",
    database:"iaramarket",
    port: "3306"
});

app.post("/create",(req,res)=>{
    const nombre = req.body.nombre;
    const categoria = req.body.categoria;
    const precio = req.body.precio;
    const stock = req.body.stock;

    db.query("INSERT INTO productos(nombre,categoria,precio,stock) VALUES(?,?,?,?)",[nombre,categoria,precio,stock],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Nuevo Producto Agregado Correctamente");
        }
    }
    );
});

app.get("/productos",(req,res)=>{
    db.query("SELECT * FROM productos",
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
});


app.listen(3001,()=>{
    console.log("Running on port 3001");
})
