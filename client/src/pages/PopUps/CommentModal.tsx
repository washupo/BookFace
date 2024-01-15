
import { Modal } from "../../common/Modal";

interface CommentModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;

}

export const CommentModal = ({ isOpen, setIsOpen, className }: CommentModalProps) => {
    
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen} 
            background='brown'
            className={`${className}`}
            name="Commentaires"
            textColor="white"
            fill="white"
        >
                    <p>Ceci est un exemple de contenu de modal.</p>


        </Modal>
    )
}
