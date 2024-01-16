import { Modal } from "../../common/Modal";
import { UserAccountForm } from "../UserProfile/UserAccountForm";

import profilPicture from '../../assets/images/profilPictureTest.png';


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
            background='white'
            className={`${className} left-0 overflow-y-scroll`}
            name="Compte utilisateur"
            textColor="brown"
            fill="brown"
        >
            <div className="flex flex-col items-center justify-center gap-30 pt-30">
            <img className="rounded-full" alt="Profile picture" src={profilPicture} />
            {/* <img className="rounded-full" alt="Profile picture" src={profilPicture} /> */}

            <UserAccountForm />
            </div>
            


        </Modal>
    )
}
