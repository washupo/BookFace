/* import { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "./Post";

interface PostData {
    _id: string;
    author: string;
    content: string;
    likes: number;
  }
  

export default function Feed() {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    // Chargez les publications depuis le backend lorsque le composant est monté
    axios.get('/api/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des publications :', error);
      });
  }, []);

  const handlePostUpdate = () => {
    // Mettez à jour les publications lorsque des likes ou des commentaires sont ajoutés
    axios.get('/api/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la mise à jour des publications :', error);
      });
  };
  return (
   <div>
      {posts.map((post) => (
        <Post key={post._id} post={post} onUpdate={handlePostUpdate} />
      ))}
    </div>
  );
}
 */

import { useState } from "react";
import { fakePosts } from "../data/fakePosts";
import { Post } from "./Post";

export default function Feed() {
  const [posts, setPosts] = useState(fakePosts);

  const handlePostUpdate = () => {
    // Mise à jour simulée des publications
    const updatedPosts = posts.map((post) => {
      return { ...post };
    });

    setPosts(updatedPosts);
  };

  return (
    <main className="flex flex-col gap-30">
      {posts.map((post) => (
        <Post key={post._id} post={post} onUpdate={handlePostUpdate} />
      ))}
    </main>
  );
}
