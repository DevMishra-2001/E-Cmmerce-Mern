import app from "./app.js";
import dotenv from "dotenv";
import { ConnectMongoDB } from "./config/db.js";
dotenv.config({ path: "./config/config.env" });
const port = process.env.PORT || 3000;

ConnectMongoDB();

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
