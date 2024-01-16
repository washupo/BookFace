import { Modal } from "../../common/Modal";

interface UserModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

export const UserModal = ({ isOpen, setIsOpen, className }: UserModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      background="white"
      className={`${className}`}
      name="Modal Title"
      textColor="brown"
      fill="brown"
    >
      <p>Ceci est un exemple de contenu de modal.</p>
    </Modal>
  );
};
