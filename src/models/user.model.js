const mongoose= require ("mongoose");

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: [true, "El nombre es obligatorio"],
    },
    email:{
        type: String,
        require: [true, "El email es obligatorio"],
        unique: true,
        trim:true
    },
    edad:{
        type: Number,
        min:0,
    },
    activo:{
        type: Boolean,
        default: true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now,
    },
});

//Exportar el esquema en user
const user = mongoose.model("user",userSchema)

module.exports = user;