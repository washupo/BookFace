import { Modal } from "../../common/modal";

interface CommentModalProps {
  className?: string;
  handleCloseModal: () => void;
}

export const CommentModal = ({
  className,
  handleCloseModal,
}: CommentModalProps) => {
  return (
    <Modal
      background="brown"
      className={`${className}`}
      name="Commentaires"
      textColor="white"
      fill="white"
      handleCloseModal={handleCloseModal}
    >
      <p>Ceci est un exemple de contenu de modal.</p>
    </Modal>
  );
};
