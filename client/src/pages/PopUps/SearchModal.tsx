
import { Modal } from "../../common/Modal";

interface SearchModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;

}

export const SearchModal = ({ isOpen, setIsOpen, className }: SearchModalProps) => {
    
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen} 
            background='brown'
            className={`${className}`}
            name="Modal Title"
        >
                    <p>Ceci est un exemple de contenu de modal.</p>


        </Modal>
    )
}
