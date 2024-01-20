import React, { useState, useRef, useEffect } from "react";
import { Modal } from "../../common/modal";
import { Button } from "../../common/button";
import { IconButton } from "../../common/IconButton";
import maskImage from "../../assets/images/masque.svg";
import axios from "axios";
import { api, getTokenPayload } from "../../API/api";

interface PostModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  handleCloseModal: () => void;
}

export const PostModal = ({ setIsOpen, className, handleCloseModal }: PostModalProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [caption, setCaption] = useState<string>("");
  const [croppedImage, setCroppedImage] = useState<string>(maskImage);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  /* Gestion du chargement de l'image sélectionnée */
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setCroppedImage(""); // Reset cropped image
    }
  };

  // Ouvrir sélecteur de fichier
  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Gérer image sélectionnée
  useEffect(() => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const size = Math.min(img.width, img.height);
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0, size, size, 0, 0, size, size);
            const croppedDataURL = canvas.toDataURL(selectedImage.type);
            setCroppedImage(croppedDataURL);
          }
        };
      };
      reader.readAsDataURL(selectedImage);
    }
  }, [selectedImage]);

  /* Connexion Backend */
  const createPost = async () => {
    const formData = new FormData();
    formData.append("image", selectedImage as File);
    formData.append("caption", caption);

    try {
      // Get the user's ID from the token payload
    const userId = getTokenPayload()?.id;

    if (userId) {
      // Add the user's ID to the headers
      api.defaults.headers.common["X-User-Id"] = userId;
    }

      // Envoyer requête POST
      const response = await axios.post("http://localhost:8000/posts", formData);

      // Gérer réponse
      console.log("Post créé avec succès :", response.data);

      // Fermer modale
      setIsOpen(false);
    } catch (error) {
      // Gérer erreur
      console.error("Error creating post:", error);
    } finally {
      // Clear the user's ID from the headers to avoid affecting other requests
      delete api.defaults.headers.common["X-User-Id"];
  }
}

  return (
    <Modal
      background="white"
      className={`${className}`}
      name="Poster"
      textColor="brown"
      fill="brown"
      handleCloseModal={handleCloseModal}
    >
      <div className="w-full flex flex-col gap-30">
        <img src={croppedImage || maskImage} alt="Selected" className="mask" />
        <label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={fileInputRef}
            className="hidden"
          />
          <IconButton
            name="post"
            size="large"
            fill="brown"
            onClick={openFileInput}
          />
        </label>
      </div>

      <textarea
        placeholder="Ajouter une légende..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="w-full h-40 bg-whitePrimary border-2 rounded-5 p-20 border-brownPrimary focus:outline-none"
        rows={3}
      />
      <Button
        type="submit"
        background="brown"
        name="Poster"
        onClick={createPost}
      />
    </Modal>
  );
};
