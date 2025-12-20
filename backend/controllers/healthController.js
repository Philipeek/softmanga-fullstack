const healthService = require("../services/healthService");

function healthCheck(req, res) {
    const status = healthService.getHealthStatus();
    res.json(status);
}

module.exports = {
    healthCheck
};
