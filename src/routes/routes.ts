import { Express } from "express";
import * as ownerController from "../controllers/owner-controller";

export function configureRoutes(app: Express) {
  app.post("/register/owner", ownerController.registerOwner);
  app.get("/fetch/owner/:id", ownerController.fetchOwner);
}
