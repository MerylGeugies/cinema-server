const Sequelize = require('sequelize');
const databaseUrl =  process.env.DATABASE_URL || 'postgres://postgres:cinema-review@localhost:5432/postgres';

const db = new Sequelize(databaseUrl);

db
  .sync({ force: false })
  .then(console.log('The database is connecting!'))
  .catch(console.error)

  module.exports = db;