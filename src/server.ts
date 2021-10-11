import "dotenv/config";
import db from "./config/config";
import app from "./app";

db.sync();

const port = process.env.PORT || "4000";
app.listen(port, () => {
  console.log("Server is up and running on port" + port);
});
