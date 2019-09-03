const Sequelize = require('sequelize');
const db = require('../db');

const Cinema = db.define(
  'cinema',
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      location: { 
        type: Sequelize.STRING,
        allowNull: false
      },

      website: {
        type: Sequelize.STRING,
        allowNull: false
      },

      picture: {
        type: Sequelize.STRING,
        allowNull: false
      }
      
    },
    {
      timestamps: false,
      tableName: 'cinemas'
    })

  // Event.hasMany(Ticket)
  // Ticket.belongsTo(Event)

module.exports = Cinema;