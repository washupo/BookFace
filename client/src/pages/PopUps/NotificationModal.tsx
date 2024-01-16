
import { Modal } from "../../common/Modal";

interface NotifModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;

}

export const NotifModal = ({ isOpen, setIsOpen, className }: NotifModalProps) => {
    
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen} 
            background='brown'
            className={`${className}`}
            name="Notifications"
            textColor="white"
            fill="white"
        >
                    <p>Ceci est un exemple de contenu de modal.</p>


        </Modal>
    )
}
