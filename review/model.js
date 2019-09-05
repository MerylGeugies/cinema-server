const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define(
  'review',
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      description: {
        type: Sequelize.STRING,
        allowNull: false
      },

      popcorn: { 
        type: Sequelize.STRING,
        allowNull: true
      },

      seats: {
        type: Sequelize.STRING,
        allowNull: true
      },

      leg_space: {
        type: Sequelize.STRING,
        allowNull: true
      },

      cheap: {
        type: Sequelize.STRING,
        allowNull: true
      },

      break: {
        type: Sequelize.STRING,
        allowNull: true
      }
      
    },
    {
      timestamps: false,
      tableName: 'reviews'
    })

module.exports = Review;