import { useState } from 'react';

import { Icon } from '../Icon';
import { Link } from 'react-router-dom';
import { Modal } from '../../common/modal';

import profilPicture from '../../assets/images/profilPictureTest.png';

type NavBarProps = {
    className?: string;
    // Include other props that NavBar can accept...
};

export const NavBar = ({ className }: NavBarProps) => {
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => { setShowModal(false) }

    return (
        <>
            <div className={`flex flex-col w-full items-start gap-30 p-30 bg-brownPrimary border-t-2 border-whitePrimary z-50 fixed h-auto bottom-0 ${className}`}>
                <div className="flex items-center justify-between w-full">
                    <Link to="/homepage">
                        <Icon name='home' size='small' fill='white' />
                    </Link>

                    <button onClick={() => setShowModal(true)}>
                        <Icon name='search' size='small' fill='white' />
                    </button>

                    <Link to="/">
                        <Icon name='post' size='small' fill='white' />
                    </Link>

                    <Link to="/">
                        <Icon name='like' size='small' fill='white' />
                    </Link>
                    <Link to="/profile">
                        <img className=" w-8 h-8 rounded-full" alt="Profile picture" src={profilPicture} />
                    </Link>

                </div>
            </div>

            {showModal && <Modal name={name} role={role} skills={skills} profilePic={profilePic} handleClose={handleClose}/>}
        </>
    );
}