import React
 from "react";
interface ModalProps {
    isOpen: boolean;
    children: React.ReactNode;
    background: "brown" | "white";
    className?: string;
}

export const Modal = ({ isOpen, children, background, className }: ModalProps) => {

    if (!isOpen) {
        document.body.style.overflow = 'auto';
        return null;
    }

    document.body.style.overflow = 'hidden';

    const backgroundClass =
        background === "brown" ? "bg-brownPrimary" : "bg-whitePrimary";

    return (
        <div className={`${backgroundClass} ${className} fixed top-0 py-30 px-20 z-50 min-h-screen w-screen`}>
            {children}
        </div>
    );
};

