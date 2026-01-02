const ApiError = require("../utils/ApiError");

function requireRole(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user || !req.user.role) {
            return next(ApiError.forbidden("User role is missing"));
        }

        if (!allowedRoles.includes(req.user.role)) {
            return next(ApiError.forbidden("Insufficient permissions"));
        }

        next();
    };
}

module.exports = requireRole;
