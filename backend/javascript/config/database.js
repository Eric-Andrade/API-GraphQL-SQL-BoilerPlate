/* eslint-disable no-console */
import Sequelize from 'sequelize'

const sequelize = new Sequelize('itecor_durango', 'kityadmin', 'adminkity2017', {
    host: 'www.itecormovil.com',
    dialect: 'mysql',
    logging: false,
    port: 3306
});

sequelize
  .authenticate()
  .then(() => {
      console.log('Connection has been established with MySQL database successfully.');
  })
  .catch(err => {
      console.error('~Unable to connect to the SQL database:', err);
  });