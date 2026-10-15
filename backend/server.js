
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

const { default: app } = await import("./app.js");
const { dbConnection } = await import("./database/dbConnection.js");

const PORT = process.env.PORT || 4000;

try {
  await dbConnection();

  app.listen(PORT, () => {
    console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
  });
} catch (err) {
  console.error("Server not started because the database connection failed.");
  process.exit(1);
}
