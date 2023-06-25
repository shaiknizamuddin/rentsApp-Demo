import { Express } from "express";
import * as ownerController from "../controllers/owner-controller";
import * as tenentController from "../controllers/tenent-controller";

export function configureRoutes(app: Express) {
  app.post("/register/owner", ownerController.registerOwner);
  app.get("/fetch/owner/:id", ownerController.fetchOwner);

  app.post("/create/tenent", tenentController.createTenent);
  app.get("/fetch/tenent/:id", tenentController.fetchTenent);
}
