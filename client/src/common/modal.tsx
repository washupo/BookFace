import React from "react";
import { IconButton } from "./IconButton";
import { Typography } from "./Typography";
import { IconProps } from "../components/Icon";

interface ModalProps {
  name: string;
  children: React.ReactNode;
  background: "brown" | "white";
  textColor: "brown" | "white";
  className?: string;
  fill: IconProps["fill"];
  handleCloseModal: () => void;
}

export const Modal = ({
  name,
  children,
  background,
  textColor,
  fill,
  className,
  handleCloseModal,
}: ModalProps) => {
  
  const backgroundClass =
    background === "brown" ? "bg-brownPrimary" : "bg-whitePrimary";

  const textColorClass =
    textColor === "brown" ? "text-brownPrimary" : "text-whitePrimary";

    // Utilisez la classe modal-open pour désactiver/activer le défilement
  const modalClass = `modal-container ${backgroundClass} ${textColorClass} ${className} fixed top-0 left-0 py-30 px-20 z-50 min-h-screen w-screen ${
    document.body.classList.contains("modal-open") ? "modal-open" : ""
  }`;

  return (
    <div
      className={modalClass}
    >
      <hgroup className="flex justify-between pb-30">
        <Typography component="h2" fontFamily="FKGroteskBold" fontSize="20">
          {name}
        </Typography>
        <IconButton
          onClick={handleCloseModal}
          name="close"
          size="small"
          fill={fill}
        />
      </hgroup>
      <div className="w-full flex flex-col gap-30 min-h-screen">
        {children}
      </div>
    </div>
  );
};
