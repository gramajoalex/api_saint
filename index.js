import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import routes from "./api/routes/index.js";

const port = process.env.PORT || 3001;
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

app.use(express.json());
app.use(helmet({ contentSecurityPolicy: false }));

app.use("/api/", routes());

app.listen(port, () => console.log(`Server running on ${port}`));
