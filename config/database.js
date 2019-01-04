const Sequelize = require('sequelize');
const db = new Sequelize('node_js', 'root', 'Gagoka1!', {
    host:'localhost',
    dialect:'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
});

module.exports = { 
    db
}
