
import { Modal } from "../../common/Modal";

interface PostModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;

}

export const PostModal = ({ isOpen, setIsOpen, className }: PostModalProps) => {
    
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen} 
            background='white'
            className={`${className}`}
            name="Poster"
            textColor="brown"
            fill="brown"
        >
                    <p>Ceci est un exemple de contenu de modal.</p>


        </Modal>
    )
}
