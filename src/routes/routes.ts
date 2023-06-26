import { Express } from "express";
import * as ownerController from "../controllers/owner-controller";
import * as tenentController from "../controllers/tenent-controller";
import * as propertyController from "../controllers/property-controller";
import * as paymentController from "../controllers/payments-controller";

export function configureRoutes(app: Express) {
  app.post("/register/owner", ownerController.registerOwner);
  app.get("/fetch/owner/:id", ownerController.fetchOwner);

  app.post("/create/tenent", tenentController.createTenent);
  app.get("/fetch/tenent/:id", tenentController.fetchTenent);

  app.post("/property/add", propertyController.addProperty);
  app.get("/property/fetch/:id", propertyController.fetchProperty);

  app.post("/payment/create", paymentController.addPayment);
}
