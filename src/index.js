const express= require("express");
const connectDB= require("../src/config/database");
const userRoutes= require("./routes/user.routes");



const app = express();  //Inicializar la app de Express
app.use(express.json()) //Middleware para parsear a json


connectDB(); //Conectar a la DB

app.get("/",(req,res)=>{    //Página de bienvenida
    res.send("Hola :D")
})

app.use("/api/usuarios", userRoutes) //Ruta de Usuarios

const PORT = 3000;  //Iniciar el servidor

app.listen(PORT,()=> {
    console.log(`Servidor conectado en http://localhost:${PORT}`);
});