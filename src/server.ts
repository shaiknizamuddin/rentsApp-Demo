import express, { Express } from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import path from "path";

import db from "./util/db";
import { configureRoutes } from "./routes/routes";

const app: Express = express();
const port = 3000;
db.connect()
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error in connecting to MongoDB: ", err));

// Express configuration
app.set("port", process.env.PORT || 8060);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Configure routes
configureRoutes(app);

const frontendResources = path.join(
  __dirname,
  "../../../rentsUI/dist"
);

app.use(
  express.static(frontendResources, {
    maxAge: 31557600000,
  })
);

app.use((req, res, next) => {
  return res.sendFile("index.html", { root: frontendResources });
});

export default app;
