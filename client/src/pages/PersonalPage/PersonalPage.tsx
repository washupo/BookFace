import { useState, useEffect } from "react";

import { IconButton } from "../../common/IconButton";
import { Typography } from "../../common/Typography";
import { Layout } from "../../components/layout/Layout";
import { NavBar } from "../../components/layout/NavBar";
import { disableBodyScroll, enableBodyScroll } from "../../bodyscroll";

import axios from "axios";
import { api } from "../../API/api";
import { UserModal } from "../PopUps/UserAccountModal";

interface ProfilDataProps {
  _id: string;
  username: string;
  email: string;
  birthdate: string;
  species: string;
  bio: string;
  avatar: {
    url: string;
  }
}

interface PostProps {
  id: string;
  title: string;
  url: string;
  user: number;
  description: string;
}

export default function PersonalPage() {
  const [popUpUser, setPopUpUser] = useState(false);
  const [profileDatas, setProfileDatas] = useState<ProfilDataProps[]>([]);
  const [posts, setPosts] = useState<PostProps[]>([]);

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
          `${import.meta.env.VITE_API_URL}/profile`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          }
        );

        // Handle the case where the response is a string
        if (typeof response.data === 'string') {
          console.log('Unexpected response format:', response.data);
          return null;
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

    const getPosts = async () => {
      try {
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?limit=50')
        const posts = response.data
        console.log(response.data)

        // Handle the case where the response is a string
        if (posts && posts.success) {
          setPosts(posts.photos);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        // Gérer erreur
        console.error('An unexpected error occurred:', error);
      }
    }
    // Call the function to fetch data when the component mounts
    getProfileDatas();
    getPosts();
  }, []);

  return (
    <>
      <Layout
        background="white"
        className="min-h-screen py-30 px-20 flex flex-col gap-30 pb-36"
      >
        {profileDatas.map((profileData) => (
          <div 
          className="flex flex-col gap-30"
          key={profileData._id}>
            <hgroup className="flex justify-between">
              <Typography component='h2' fontFamily="FKGroteskBold" textColor="brown" fontSize="20">{profileData.username}</Typography>

              {/* <Typography component='h2' fontFamily="FKGroteskBold" fontSize="20">{username}</Typography> */}
              <IconButton onClick={openPopUpUser} name='settings' size='small' fill='brown' />
            </hgroup>

            <div className="flex flex-col gap-15">
              <div className="flex gap-10 items-center">

                <img className=" w-20 h-20 rounded-full" alt="Profile picture" src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww" />
                {/* <img className=" w-20 h-20 rounded-full" alt="Profile picture" src={profileData.avatar.url} /> */}

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

            <div className="grid grid-cols-3 gap-1">
              {posts
              .filter((post) => post.user === 30)
              .map((post) => (
                <div key={post.id}>
                  <img className="w-full h-full object-cover" alt="Profile picture" src={post.url} />
                </div>  
              ))}
            </div>

          </div>
        ))}

      </Layout>
      <NavBar />
      {popUpUser && <UserModal handleCloseModal={closePopUpUser} />}
    </>
  )
} 