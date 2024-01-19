
import { Modal } from "../../common/Modal";
interface SearchModalProps {
    className?: string;
    handleCloseModal: () => void;
}

export const SearchModal = ({ className, handleCloseModal }: SearchModalProps) => {
    
    return (
        <Modal
            background='brown'
            className={`${className}`}
            name="Modal Title"
            textColor="white"
            fill="white"
            handleCloseModal={handleCloseModal}
        >
                    <p>Ceci est un exemple de contenu de modal.</p>


        </Modal>
    )
}
