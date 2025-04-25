const mongoose = require("mongoose")

const connectDB = async () =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/mongo_test")
        console.log("MongoDB Conectado")
    } catch(error){
        console.error("Error al conectarse al servidor", error)
    }
}


module.exports = connectDB