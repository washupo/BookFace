import { useState } from "react";
import { Icon } from "../Icon";
import { Link } from "react-router-dom";
import { IconButton } from "../../common/IconButton";
import profilPicture from "../../assets/images/profilPictureTest.png";
/* import Modal */
import { SearchModal } from "../../pages/PopUps/SearchModal";
import { PostModal } from "../../pages/PopUps/NewPostModal";
import { NotifModal } from "../../pages/PopUps/NotificationModal";
/* Fix Scroll modal */
import { disableBodyScroll, enableBodyScroll } from "../../bodyscroll";

type NavBarProps = {
  className?: string;
};

export const NavBar = ({ className }: NavBarProps) => {
  const [popUpSearch, setPopUpSearch] = useState(false);
  const [popUpPost, setPopUpPost] = useState(false);
  const [popUpNotif, setPopUpNotif] = useState(false);

  const openSearchPopUp = () => {
    setPopUpSearch(true);
    disableBodyScroll({ savePosition: true });
  };

  const openPostPopUp = () => {
    setPopUpPost(true);
    disableBodyScroll({ savePosition: true });
  };

  const openNotifPopUp = () => {
    setPopUpNotif(true);
    disableBodyScroll({ savePosition: true });
  };

  const closeSearchPopUp = () => {
    setPopUpSearch(false);
    enableBodyScroll();
  };

  const closePostPopUp = () => {
    setPopUpPost(false);
    enableBodyScroll();
  };

  const closeNotifPopUp = () => {
    setPopUpNotif(false);
    enableBodyScroll();
  };

  return (
    <>
      <div
        className={`flex flex-col w-full items-start gap-30 p-30 bg-brownPrimary border-t-2 border-whitePrimary fixed h-auto bottom-0 ${className}`}
      >
        <div className="flex items-center justify-between w-full">
          <Link to="/homepage">
            <Icon name="home" size="small" fill="white" />
          </Link>

          <IconButton
            onClick={openSearchPopUp}
            name="search"
            size="small"
            fill="white"
          />

          <IconButton
            onClick={openPostPopUp}
            name="post"
            size="small"
            fill="white"
          />

          <IconButton
            onClick={openNotifPopUp}
            name="like"
            size="small"
            fill="white"
          />

          <Link to="/profile">
            <img
              className=" w-8 h-8 rounded-full"
              alt="Profile picture"
              src={profilPicture}
            />
          </Link>
        </div>
      </div>

      {popUpSearch && <SearchModal handleCloseModal={closeSearchPopUp} />}
      {popUpPost && (
        <PostModal
          handleCloseModal={closePostPopUp}
          setIsOpen={openPostPopUp}
        />
      )}
      {popUpNotif && <NotifModal handleCloseModal={closeNotifPopUp} />}
    </>
  );
};
