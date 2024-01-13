import home from '../../assets/images/icon/home.svg';
import search from '../../assets/images/icon/search.svg';
import post from '../../assets/images/icon/post.svg';
import like from '../../assets/images/icon/liked.svg';
import profilPicture from '../../assets/images/profilPictureTest.png';

type NavBarProps = {
    className?: string;
    // Include other props that NavBar can accept...
};

export const NavBar = ({ className }: NavBarProps) => {
    return (
        <>
            <div className={`flex flex-col w-full items-start gap-30 p-[30px] bg-brownPrimary border-t-2 border-whitePrimary ${className}`}>
                <div className="flex items-center justify-between w-full">
                    <img className="relative w-8 h-8" alt="Funnyfur logo" src={home} />
                    <img className="relative w-8 h-8" alt="Glass" src={search} />
                    <img className="relative w-8 h-8" alt="Add picture" src={post} />
                    <img className="relative w-8 h-8" alt="Like" src={like} />
                    <img className="relative w-8 h-8 rounded-full" alt="Profile picture" src={profilPicture} />
                </div>
            </div>
        </>
    );
}