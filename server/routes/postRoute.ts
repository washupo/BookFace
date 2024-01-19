import { Application } from "express";
import { createPost } from "../controllers/postController";
import { loginRequired } from "../controllers/userController"; // Middleware d'authentification
import upload from "../middleware/multer"; // Importer le middleware Multer

// Endpoint pour créer un post

export default function (app: Application) {
  app.route("/posts").post(loginRequired, upload.single("image"), createPost);
}
