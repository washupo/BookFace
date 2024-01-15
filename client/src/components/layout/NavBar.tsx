import { useState } from 'react';
import { Icon } from '../Icon';
import { Link } from 'react-router-dom';
import { IconButton } from '../../common/IconButton';

import profilPicture from '../../assets/images/profilPictureTest.png';

import { SearchModal } from '../../pages/PopUps/SearchModal';
import { PostModal } from '../../pages/PopUps/NewPostModal';
import { NotifModal } from '../../pages/PopUps/NotificationModal';

type NavBarProps = {
    className?: string;
    // Include other props that NavBar can accept...
};

export const NavBar = ({ className }: NavBarProps) => {
    const [popUpSearch, setPopUpSearch] = useState(false);
    const [popUpPost, setPopUpPost] = useState(false);
    const [popUpNotif, setPopUpNotif] = useState(false);

    const searchPopUp = () => setPopUpSearch(true);
    const postPopUp = () => setPopUpPost(true);
    const notifPopUp = () => setPopUpNotif(true);

    return (
        <>
            <div className={`flex flex-col w-full items-start gap-30 p-30 bg-brownPrimary border-t-2 border-whitePrimary fixed h-auto bottom-0 ${className}`}>
                <div className="flex items-center justify-between w-full">

                    <Link to="/homepage">
                        <Icon name='home' size='small' fill='white' />
                    </Link>

                    <IconButton onClick={searchPopUp} name='search' size='small' fill='white' />

                    <IconButton onClick={postPopUp} name='post' size='small' fill='white' />

                    <IconButton onClick={notifPopUp} name='like' size='small' fill='white' />

                    <Link to="/profile">
                        <img className=" w-8 h-8 rounded-full" alt="Profile picture" src={profilPicture} />
                    </Link>

                </div>
            </div>

            {popUpSearch && (<SearchModal isOpen={popUpSearch} setIsOpen={setPopUpSearch} />)}
            {popUpPost && (<PostModal isOpen={popUpPost} setIsOpen={setPopUpPost} />)}
            {popUpNotif && (<NotifModal isOpen={popUpNotif} setIsOpen={setPopUpNotif} />)}

        </>
    );
}