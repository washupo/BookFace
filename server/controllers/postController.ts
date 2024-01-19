import { Request, Response } from "express";
import PostModel from "../models/postModel";

export const createPost = async (req: Request, res: Response) => {
  try {
    const { user, caption } = req.body;
    const image = req.file?.path; // Chemin de l'image, assurez-vous d'utiliser multer pour gérer le téléchargement des images.

    const newPost = new PostModel({ user, caption, image });
    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
