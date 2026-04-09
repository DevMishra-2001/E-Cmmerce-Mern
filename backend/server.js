import app from "./app.js";
import dotenv from "dotenv";
import { ConnectMongoDB } from "./config/db.js";
dotenv.config({ path: "./config/config.env" });
const port = process.env.PORT || 3000;

ConnectMongoDB();

// Handle uncaught exception error

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Server is shutting Down , due to uncaught exception errors`);
  process.exit(1);
});

const server = app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Server is Shutting Down, due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
