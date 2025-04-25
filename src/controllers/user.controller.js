const user = require("../models/user.model");
const { use } = require("../routes/user.routes");
const userService = require("../services/user.service")

//Función para crear usuarios
const crearUser= async(req, res) =>{
    try{
        const newUser = await userService.crearUser(req.body);
        res.status(201).json({
            exito:true,
            mensaje: "El usuario fue registrado con éxito.",
            datos: newUser
        });
    }
    catch(error){
        res.status(404).json({
            exito:false,
            mensaje: "Error 404; la página solicitada no existe",
        });
    }
};

//Función para obtener todos los usuarios
const getUsers= async(req, res) =>{
    try{
        const userList = await userService.getUsers()
        res.status(200).json({
            exito: true,
            datos: userList
        })
    }
    catch(error){
        res.status(404).json({
            exito:false,
            mensaje: "Error 404; la página solicitada no existe",
        });
    }
}

//Función para buscar un usuario por su ID
const getUsersById = async(req, res)=>{
    try{
        const user = await userService.getUsersById(req.params.id);
        if (!user){
            return res.status(404).json({
                exito:false,
                mensaje: "El usuario no se ha encontrado o no existe"
            })
        }
        res.status(200).json({
            mensaje: "El usuario fue encontrado:",
            exito:true,
            datos: user
        });
    }
    catch(error){
        res.status(500).json({
            exito:false,
            mensaje: "Error 500; ha ocurrido un error interno del servidor",
        })
    }
}

//Función para actualizar los datos de un usuario 
const updateUser = async (req,res)=>{
    try{
        const updatedUser= await userService.updateUser(
            req.params.id,
            req.body
        )
        res.status(200).json({
            exito:true,
            mensaje:"Usuario actualizado correctamente",
            datos: updateUser,
        });
    }catch(error){
        res.status(404).json({
            exito:false,
            mensaje: "No se pudo encontrar el usuario."
        });
    }
};

//Función para eliminar un usuario
const deleteUser= async(req,res)=>{
    try{
        await userService.deleteUser(req.params.id)
        res.status(200).json({
            exito:true,
            mensaje:"El usuario se ha eliminado correctamente",
        });
    }
    catch(error){
        res.status(404).json({
            exito:false,
            mensaje: "No se pudo encontrar el usuario."
        });
    }
};


// Aquí se exportan las funciones hacia el index
module.exports= {
    crearUser,
    getUsers,
    getUsersById,
    updateUser,
    deleteUser
};