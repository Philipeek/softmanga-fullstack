const ApiError = require("../utils/ApiError");

function requireRole(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user || !req.user.role) {
            return next(ApiError.badRequest("User role is missing"));
        }

        if (!allowedRoles.includes(req.user.role)) {
            return next(ApiError.badRequest("Insufficient permissions"));
        }

        next();
    };
}

module.exports = requireRole;
