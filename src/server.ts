import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

const port = 5001;
const uri =
  "mongodb+srv://mongoose:mongoose@cluster0.ml8mugs.mongodb.net/libraryManagementDB?retryWrites=true&w=majority&appName=Cluster0";


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
