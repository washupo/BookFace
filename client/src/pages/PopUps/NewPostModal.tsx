import React, { useState, useRef, useEffect } from "react";
import { Modal } from "../../common/Modal";
import { Button } from "../../common/button";
import { IconButton } from "../../common/IconButton";
import maskImage from "../../assets/images/masque.svg";

interface PostModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

export const PostModal = ({ isOpen, setIsOpen, className }: PostModalProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [caption, setCaption] = useState<string>("");
  const [croppedImage, setCroppedImage] = useState<string>(maskImage);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setCroppedImage(""); // Réinitialiser l'image recadrée avec une chaîne vide
    }
  };

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

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
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      background="white"
      className={className}
      name="Poster"
      textColor="brown"
      fill="brown"
    >
      <div className="w-full flex flex-col gap-30 items-center">
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
        className="w-full h-40 bg-transparent border-2 rounded-5 p-20 border-brownPrimary focus:outline-none"
        rows={3}
      />
      <Button type="submit" background="brown" name="Poster" />
    </Modal>
  );
};
