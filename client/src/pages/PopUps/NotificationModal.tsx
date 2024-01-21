
import { Modal } from "../../common/modal";

interface NotifModalProps {
    className?: string;
    handleCloseModal: () => void;
}

export const NotifModal = ({ className, handleCloseModal }: NotifModalProps) => {

    return (
        <Modal
            background='brown'
            className={`${className}`}
            name="Notifications"
            textColor="white"
            fill="white"
            handleCloseModal={handleCloseModal}
        >
            <p>Ceci est un exemple de contenu de modal.</p>
        </Modal>
    )
}
