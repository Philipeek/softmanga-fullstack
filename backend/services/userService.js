const userModel = require("../models/userModel");

async function getAllUsers() {
    return userModel.getAllUsers();
}

async function getUserById(id) {
    return userModel.getUserById(id);
}

module.exports = {
    getAllUsers,
    getUserById
};
