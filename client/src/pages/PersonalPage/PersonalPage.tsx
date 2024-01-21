import { useState, useEffect } from "react";

import { IconButton } from "../../common/IconButton";
import { Typography } from "../../common/Typography";
import { Layout } from "../../components/layout/Layout";
import { NavBar } from "../../components/layout/NavBar";

import { UserModal } from "../PopUps/UserAccountModal";
import { disableBodyScroll, enableBodyScroll } from "../../BodyScroll";

import profilPicture from '../../assets/images/profilPictureTest.png';
import axios from "axios";
import { api } from "../../API/api";

interface ProfileDataPops {
  _id: string;
  userId: string;
  fullName: string;
  username: string;
  bio?: string;
  avatar?: object;
  email?: string;
  birthdate?: string;
  hash_password?: string;
  species?: string;
  gender?: 'M' | 'F' | 'X';
}

export default function PersonalPage(
  {
    userId, username, fullName, bio, avatar, email, birthdate, hash_password, species, gender
  }: ProfileDataPops
) {
  const [popUpUser, setPopUpUser] = useState(false);
  const [profileDatas, setProfileDatas] = useState<ProfileDataPops[]>([]);


  const openPopUpUser = () => {
    setPopUpUser(true);
    disableBodyScroll({ savePosition: true });
  };

  const closePopUpUser = () => {
    setPopUpUser(false);
    enableBodyScroll();
  };



  useEffect(() => {
    // Récupérer les données du profil
    const getProfileDatas = async () => {

      try {
        // Envoyer requête GET
        const response = await api.get(
          "http://localhost:8000/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          }
        );

        // Handle the case where the response is a string
        if (typeof response.data === 'string') {
          console.log('Unexpected response format:', response.data);
          return;
        }

        // Gérer réponse - Mise à jour de l'état local avec les données du profil
        setProfileDatas(Array.isArray(response.data) ? response.data : [response.data]);
        console.log("Profile :", response.data);
      } catch (error) {
        // Gérer erreur
        if (axios.isAxiosError(error)) {
          console.error('Échec de l\'authentification :', error.response?.data?.message);
        } else {
          console.error('An unexpected error occurred:', error);
        }
      }
    }
    // Call the function to fetch data when the component mounts
    getProfileDatas();
  }, []);

  return (
    <>
      <Layout
        background="white"
        className="min-h-screen py-30 px-20 flex flex-col gap-30 pb-36"
      >
        {profileDatas.map((profileData) => (
          <div key={profileData._id}>
            <hgroup className="flex justify-between">
              <Typography component='h2' fontFamily="FKGroteskBold" textColor="brown" fontSize="20">{profileData.username}</Typography>

              {/* <Typography component='h2' fontFamily="FKGroteskBold" fontSize="20">{username}</Typography> */}
              <IconButton onClick={openPopUpUser} name='settings' size='small' fill='brown' />
            </hgroup>

            <div className="flex flex-col gap-15">
              <div className="flex gap-10 items-center">

                <img className=" w-20 h-20 rounded-full" alt="Profile picture" src={profileData.avatar.url} />
                

                <div className="flex justify-between w-full">
                  <div>
                    <Typography component='p' fontFamily="FKGroteskBold" fontSize="20" textColor="brown" className="text-center">999M</Typography>
                    {/* <Typography component='p' fontFamily="FKGroteskBold" fontSize="20" textColor="brown" className="text-center">{postsNumber}</Typography> */}
                    <Typography component='p' fontFamily="FKGrotesk" fontSize="15" textColor="brown">Publications</Typography>
                  </div>
                  <div>
                    <Typography component='p' fontFamily="FKGroteskBold" fontSize="20" textColor="brown" className="text-center">999M</Typography>
                    {/* <Typography component='p' fontFamily="FKGroteskBold" fontSize="20" textColor="brown" className="text-center">{followersNumber}</Typography> */}
                    <Typography component='p' fontFamily="FKGrotesk" fontSize="15" textColor="brown">Followers</Typography>
                  </div>
                  <div>
                    <Typography component='p' fontFamily="FKGroteskBold" fontSize="20" textColor="brown" className="text-center">999M</Typography>
                    {/* <Typography component='p' fontFamily="FKGroteskBold" fontSize="20" textColor="brown" className="text-center">{followNumber}</Typography> */}
                    <Typography component='p' fontFamily="FKGrotesk" fontSize="15" textColor="brown">Suivi(e)s</Typography>
                  </div>
                </div>

              </div>

              <section>
                <Typography component='p' fontFamily="FKGroteskBold" fontSize="15" textColor="brown">{profileData.username}</Typography>
                <Typography component='p' fontFamily="FKGrotesk" fontSize="15" textColor="brown">
                  {profileData.bio}
                </Typography>
              </section>

              <button className=" bg-brownPrimary text-whitePrimary font-fkGroteskBold py-1 px-9 rounded-5 ml-0 m-auto">
                suivre
              </button>
              {/* onClick={ } */}
            </div>


            <div className="flex flex-col gap-10 items-center">
              <Typography component='p' fontFamily="FKGrotesk" fontSize="15" textColor="brown"> {profileData.email} </Typography>
              <Typography component='p' fontFamily="FKGrotesk" fontSize="15" textColor="brown"> {profileData.birthdate} </Typography>
              <Typography component='p' fontFamily="FKGrotesk" fontSize="15" textColor="brown"> {profileData.species} </Typography>
              <Typography component='p' fontFamily="FKGrotesk" fontSize="15" textColor="brown"> {profileData.avatar && profileData.avatar.url} </Typography>

            </div>
          </div>
        ))}


        {/*<div className='flex gap-3'>
        {menus.map(menu => (
          <div
            key={menu._id}
            className='text-center space-y-2 shadow-xl rounded-2xl w-1/2 sm:w-1/3 h-3/4'
          >
            <img
              src={menu.image}
              alt={menu.name}
              className='object-cover rounded-t-2xl h-3/5 w-full'
            />
            <h2 className='font-luckiest text-orange'>{menu.name}</h2>
            <p className='text-sm italic'>{menu.description}</p>
            <p>{menu.price}</p>
          </div>
        ))}
        </div>*/}
      </Layout>
      <NavBar />
      {popUpUser && <UserModal handleCloseModal={closePopUpUser} />}
    </>
  )
} 