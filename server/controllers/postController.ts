// import { Request, Response } from "express";
// import PostModel from "../models/postModel";

// export const createPost = async (req: Request, res: Response) => {
//   try {
//     const { user, caption } = req.body;
//     const image = req.file?.path; // Chemin de l'image, assurez-vous d'utiliser multer pour gérer le téléchargement des images.

//     const newPost = new PostModel({ user, caption, image });
//     const savedPost = await newPost.save();

//     res.status(201).json(savedPost);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

import { Request, Response } from "express";
import PostModel from "../models/postModel";
import firebaseApp from "../firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Configurer Multer  pour gérer le téléchargement d'images. Les images sont stockées temporairement en mémoire avant d'être téléchargées dans Firebase Storage.
const storage = getStorage(firebaseApp);
const imageStorage = multer.memoryStorage();

export const upload = multer({
  storage: imageStorage,
  // limits: { fileSize: 5 * 1024 * 1024 }, // Limite de taille du fichier (5MB)
});

export const createPost = async (req: Request, res: Response) => {
  try {
    const { user, caption } = req.body;
    const image = req.file; // Chemin de l'image, assurez-vous d'utiliser multer pour gérer le téléchargement des images.

    // Vérifiez si 'image' est défini
    if (!image) {
      return res.status(400).json({ message: "Image is required" });
    }

    // Téléchargez l'image dans Firebase Storage
    const imageName = `${uuidv4()}-${path.extname(image.originalname)}`;
    const imageRef = ref(storage, `images/${imageName}`);

    const metadata = {
      contentType: image.mimetype,
    };

    // Upload the file in the bucket storage
    const uint8Array = new Uint8Array(image.buffer);
    const snapshot = await uploadBytesResumable(imageRef, uint8Array, metadata);
    
    // Get the URL of the uploaded image
    const imageUrl = await getDownloadURL(snapshot.ref);

    const newPost = new PostModel({ user, caption, image: imageUrl });
    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
    console.log('File available at', imageUrl);
  } catch (error) {
  console.error(error);
  res.status(500).json({ message: "Internal server error" });
}
};

