import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes/index.js";
import initPassport from "./middlewares/initPassport.js";

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

const passport = initPassport(app);

app.use("/api/", routes(passport));

app.listen(port, () => console.log(`Server running on ${port}`));
