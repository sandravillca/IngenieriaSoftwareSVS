import Sequelize from "sequelize";

export const sequelize = new Sequelize('sistema_colas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

//* export const sequelize = new Sequelize(
//  "projectsdb", // db name,
//  "postgres", // username
//  "mysecretpassword", // password
//  {
//    host: "localhost",
//    dialect: "sqlite",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
//  }
// );