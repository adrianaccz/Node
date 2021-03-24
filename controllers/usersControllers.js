const axios = require('../config/axios')
const { find, create, update, deleteU } = require('../helpers/crud');

exports.getUsers = async (req, res) => {
    try {
        const users = await find("/users");                         // find que esta creado en el crud  
        res.json(users); 
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = await create("/users", req.body);     // {data es la informacion del body}("/url",  objeto)
        res.status(201).json(user);  
    } catch (error) {
        res.status(400).send(error);
    }                                          
};

exports.getUsersById = async (req, res) => {
    try {
        const { id } = req.params                                   // en el parametro params se encuentra el id
        const user = await find(`/users/${id}`);       
        res.json(user); 
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { data } = await update(`/users/${id}`, req.body);     
        res.status(200).json(data);  
    } catch (error) {
        res.status(400).send(error);
    }                                          
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params                                   // en el parametro params se encuentra el id
        const deletedUser = await deleteU(`/users/${id}`);       
        res.send(deletedUser); 
    } catch (error) {
        res.status(400).send(error);
    }
};