import "dotenv/config";
// import db from "./config/config";
import { dbConnection } from "save-database";
import app from "./app";

// sequelize.sync();
dbConnection.connect();
const port = process.env.PORT || "4000";
app.listen(port, () => {
  console.log("Server is up and running on port" + port);
});
