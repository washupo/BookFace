import { Application } from "express";
import * as userHandlers from "../controllers/userController";

export default function (app: Application) {
  // todoList Routes
  app.route("/tasks").post(userHandlers.loginRequired, userHandlers.profile);

  app.route("/auth/signup").post(userHandlers.signup);

  app.route("/auth/login").post(userHandlers.login);
}
