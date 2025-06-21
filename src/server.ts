import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI as string;

let server: Server;

async function main() {
  try {
    await mongoose.connect(uri);
    console.log("Mongodb connect with mongoose successfully");
    server = app.listen(port, () => {
      console.log(`Library Management app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
