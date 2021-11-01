// services/lab.service.js
const Laboratory = require("@moleculer/lab");
module.exports = {
    mixins: [Laboratory.AgentService],
    settings: {
        name: "lab",
        token: process.env.LAB_TOKEN,
        apiKey: process.env.LAB_APIKEY
    }
};