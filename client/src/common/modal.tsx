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

  return (
    <div
      className={`${backgroundClass} ${textColorClass} ${className} fixed top-0 py-30 px-20 z-50 min-h-screen w-screen`}
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
      <div className="w-full flex flex-col gap-30 min-h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
