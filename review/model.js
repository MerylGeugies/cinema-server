const Sequelize = require('sequelize');
const db = require('../db');
// const Cinema = require('../cinema/model');

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
        type: Sequelize.INTEGER,
        allowNull: true
      },

      seats: {
        type: Sequelize.INTEGER,
        allowNull: true
      },

      leg_space: {
        type: Sequelize.INTEGER,
        allowNull: true
      },

      cheap: {
        type: Sequelize.INTEGER,
        allowNull: true
      },

      break: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
      
    },
    {
      timestamps: false,
      tableName: 'reviews'
    })

module.exports = Review;