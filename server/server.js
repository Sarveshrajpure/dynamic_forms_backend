import express from "express";
const app = express();
import cors from "cors";
import { routes } from "./routes/index.js";

///body parser
app.use(express.json());

//ROUTES
app.use("/api", routes);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
