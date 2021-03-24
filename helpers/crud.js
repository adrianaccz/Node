const axios = require('../config/axios');

module.exports = {
    find: async path => {
        try {
            const { data } = await axios.get(path);    
            return data;
        } catch (error) {
            throw error.message;
        }
    },
    create: async (path, body) => {
        try {
            const { data } = await axios.post(path, body);     
            return data;  
        } catch (error) {
            throw error.message;
        }  
    },
    update: async (path, body) => {
        try {
            const { data } = await axios.put(path, body);     
            return data;  
        } catch (error) {
            throw error.message;
        } 
    },
    deleteU: async (path) => {
        try {                                 
            await axios.delete(path);       
            return "Usuario eliminado"
        } catch (error) {
            throw error.message;
        }
    }
}