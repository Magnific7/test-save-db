import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
});
// db.authenticate()
//   .then(() => {
//     console.log("Connected to db");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
export default db;
