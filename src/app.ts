import express, { Request, Response } from "express";
import cors from "cors";
import bookRoutes from "./app/routes/book.route";
import borrowRoutes from "./app/routes/borrow.route";
import { globalErrorHandler } from "./errors/globalerrorHandler";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://library-client-ten.vercel.app"],
  })
);
app.use(express.json());

// Routes
app.use("/api", bookRoutes);
app.use("/api", borrowRoutes);

app.use(globalErrorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send("Library Management App is running automate with github");
});

export default app;
