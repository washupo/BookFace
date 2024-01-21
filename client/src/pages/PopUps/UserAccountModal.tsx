import { Modal } from "../../common/Modal";
import { UserAccountForm } from "../UserProfile/UserAccountForm";

import profilPicture from "../../assets/images/profilPictureTest.png";

interface UserModalProps {
  className?: string;
  handleCloseModal: () => void;
}

export const UserModal = ({ className, handleCloseModal }: UserModalProps) => {
  return (
    <Modal
      background="white"
      className={`${className} left-0`}
      name="Compte utilisateur"
      textColor="brown"
      fill="brown"
      handleCloseModal={handleCloseModal}
    >
      <div className="flex flex-col items-center justify-center gap-30 pt-30">
        <img
          className="rounded-full"
          alt="Profile picture"
          src={profilPicture}
        />
        {/* <img className="rounded-full" alt="Profile picture" src={profilPicture} /> */}

        <UserAccountForm />
      </div>
    </Modal>
  );
};
