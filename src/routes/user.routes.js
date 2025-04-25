const express = require("express");
const {
    crearUser, 
    getUsers,
    getUsersById,
    updateUser,
    deleteUser
} = require ("../controllers/user.controller");

const router = express.Router();

//Ruta para un nuevo usuario
router.post("/crear", crearUser)

//Ruta para obtener TODOS los usuarios
router.get("/", getUsers)

//Ruta para obtener usuario por ID
router.get("/:id", getUsersById)

//Ruta para actualizar usuarios
router.put("/:id", updateUser)

//Ruta para eliminar usuarios
router.delete("/:id", deleteUser)


module.exports = router  //Exportar la ruta del router