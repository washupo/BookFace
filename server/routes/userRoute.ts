import { Application } from "express";
import * as userHandlers from "../controllers/userController";
import * as profileHandlers from "../controllers/profileControllers";

export default function (app: Application) {
  // todoList Routes
  app.route("/tasks").post(userHandlers.loginRequired, userHandlers.profile);

  app.route("/auth/signup").post(userHandlers.signup);

  app.route("/auth/login").post(userHandlers.login);

  app
    .route("/profile")
    .get(userHandlers.loginRequired, profileHandlers.getProfile);

  app
    .route("/profile")
    .post(userHandlers.loginRequired, profileHandlers.getProfile);
}
