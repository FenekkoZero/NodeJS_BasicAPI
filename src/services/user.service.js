const user = require("../models/user.model");

const crearUser= async (userData)=>{    //Crear un usuario nuevo 
    try{
        const newUser= new user(userData);
        if(!newUser){
            return null;
        }
        return await newUser.save();
    }
    catch (error){
        console.error(error);
    }
};

const getUsers = async () =>{   //Obtener datos de los usuarios
    try{
        return await user.find();
    }
    catch (error){
        console.error(error);
    }
};

//Función para obtener un usuario específico por ID
const getUsersById = async (id) =>{
    try{
        const givenUser = await user.findById(id);
        if(!givenUser){
            return null;   //Si no se encuentra el usuario buscado, se retorna null para que el controller maneje el error
        }
        return givenUser
    }
    catch (error){
        console.error(error);
        throw error;
    }
};

const updateUser = async (id, updateData) =>{     //Actualizar un usuario existente
    try{
        const updatedUser = await user.findByIdAndUpdate(
            id,
            updateData,
            {new:true, runValidators:true}
        )
        if(!updatedUser){
            return "Usuario no encontrado"
        }
        return updatedUser
    }
    catch (error){
        console.log("No se ha encontardo el usuario ingresado. Error"+ error);
    }
};

const deleteUser = async(id)=>{     //Eliminar un usuario activo
    try{
        const deletedUser = await user.findByIdAndDelete(id)
        if(!deletedUser){
            return "Usuario no encontrado"
        }
        return {mensaje: "Usuario eliminado"}
    }
    catch (error){
        console.error (error);
    }
};

module.exports ={
    crearUser,
    getUsers,
    getUsersById,
    updateUser,
    deleteUser
}