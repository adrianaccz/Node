const express = require('express');
const router = express.Router();

const UsersControllers = require('../controllers/usersControllers')


module.exports = () => {

router.get("/", (req, res) => res.send("Hola Mundo!!!"));

// User route
router.get("/users", UsersControllers.getUsers);

router.post("/users", UsersControllers.createUser);

router.get("/users/:id", UsersControllers.getUsersById);

router.put("/users/:id", UsersControllers.updateUser);

router.delete("/users/:id", UsersControllers.deleteUser);

    return router
};

