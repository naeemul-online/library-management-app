import express, { Request, Response } from "express";
import cors from "cors";
import bookRoutes from "./app/routes/book.route";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", bookRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Library Management App is running");
});

export default app;
