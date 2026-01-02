const userService = require("../services/userService");
const ApiError = require("../utils/ApiError");
const { parseIdParam } = require("../utils/validators");

async function listUsers(req, res, next) {
    try {
        const users = await userService.getAllUsers();
        res.json({ data: users });
    } catch (error) {
        next(error);
    }
}

async function getUser(req, res, next) {
    try {
        const id = parseIdParam(req.params.id, "user id");

        const user = await userService.getUserById(id);
        if (!user) return next(ApiError.notFound("User not found"));

        res.json({ data: user });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    listUsers,
    getUser
};
