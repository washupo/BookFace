import React from "react";
import { IconButton } from "./IconButton";
import { Typography } from "./Typography";
import { IconProps } from "../components/Icon";


interface ModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    name: string;
    children: React.ReactNode;
    background: "brown" | "white";
    textColor: "brown" | "white";
    className?: string;
    fill: IconProps['fill']; 
}

export const Modal = ({ isOpen, setIsOpen, name, children, background, textColor, fill, className }: ModalProps) => {

    if (!isOpen) {
        document.body.style.overflow = 'auto';
        return null;
    }

    document.body.style.overflow = 'hidden';

    const backgroundClass =
        background === "brown" ? "bg-brownPrimary" : "bg-whitePrimary";

        const textColorClass =
        textColor === "brown" ? "text-brownPrimary" : "text-whitePrimary";


    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div className={`${backgroundClass} ${textColorClass} ${className} fixed top-0 py-30 px-20 z-50 min-h-screen w-screen`}>
            <hgroup className="flex justify-between">
                <Typography component='h2' fontFamily="FKGroteskBold" fontSize="20">{name}</Typography>
                <IconButton onClick={handleCloseModal} name='close' size='small' fill={fill} />
            </hgroup>
            {children}
        </div>
    );
};

