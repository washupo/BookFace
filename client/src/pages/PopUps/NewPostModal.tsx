import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Modal } from "../../common/modal";
import { Button } from "../../common/button";
import { IconButton } from "../../common/IconButton";
import maskImage from "../../assets/images/masque.svg";
import { Input } from "../../components/form/Input";
import { api } from "../../API/api";
import { jwtDecode } from "jwt-decode";

interface PostModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  handleCloseModal: () => void;
}

export const PostModal = ({ setIsOpen, className, handleCloseModal }: PostModalProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<string>(maskImage);
  const [credentials, setCredentials] = useState({
    image: "",
    caption: "",
    userId: "",
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  /* Connexion Backend */
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {

      // Créer un objet FormData pour envoyer le fichier image et le texte de la légende
      const formData = new FormData();
      formData.append("image", selectedImage as File);
      formData.append("caption", credentials.caption);
      const decodedToken: any = jwtDecode(localStorage.getItem("token") as string);
      formData.append("user", decodedToken._id);

      // Envoyer requête POST
      const response = await axios.post(
        "http://localhost:8000/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        }
      );

      // Gérer réponse
      console.log("Post créé avec succès :", response.data);

      // Fermer modale
      setIsOpen(false);
    } catch (error) {
      // Gérer erreur
      if (axios.isAxiosError(error)) {
        console.error('Échec de l\'authentification :', error.response?.data?.message);
      } else {
        console.error('An unexpected error occurred:', error);
      }
    } finally {
      // Clear the user's ID from the headers to avoid affecting other requests
      delete api.defaults.headers.common["X-User-Id"];
    }
  }

  /* Gestion du chargement de l'image sélectionnée */
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setCroppedImage(""); // Reset cropped image
    }
  };

  // Ouvrir sélecteur de fichier
  const openFileInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
  
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



  return (
    <Modal
      background="white"
      className={`${className}`}
      name="Poster"
      textColor="brown"
      fill="brown"
      handleCloseModal={handleCloseModal}
    >

      <form action="post" onSubmit={handleSubmit} className="w-full flex flex-col gap-30">
        <div className="w-full flex flex-col gap-30">
          <img src={croppedImage || maskImage} alt="Selected" className="mask" />
          <label>
            <input
              type="file"
              accept="image/*"

              ref={fileInputRef}
              className="hidden"
              onChange={handleImageUpload}
            />
            <IconButton
              name="post"
              size="large"
              fill="brown"
              onClick={openFileInput}
            />
          </label>
        </div>

        <Input
          as="textarea"
          label=""
          placeholder="Ajouter une légende..."
          type="text"
          name="caption"
          value={credentials.caption}
          color="brown"
          border="all"
          onChange={handleChange}
        // onChange={(e) => setCaption(e.target.value)}

        />
        <Button
          type="submit"
          background="brown"
          name="Poster"
        // onClick={createPost}
        />
      </form>
    </Modal>
  );
};
