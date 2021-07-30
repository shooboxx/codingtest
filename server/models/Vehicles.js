const Sequelize = require('sequelize');
const db = require('../config');

const Vehicles = db.define('Vehicle', {
    type: {
        type: Sequelize.STRING
    },
    milage: {
        type: Sequelize.INTEGER
    },
    hybrid: {
        type: Sequelize.BOOLEAN
    },
    createdAt: false,
    updatedAt: false,
})

module.exports = Vehicles;