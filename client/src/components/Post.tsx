/* import { useState } from "react";
import axios from "axios";

interface PostProps {
  post: {
    _id: string;
    author: string;
    content: string;
    likes: number;
  };
  onUpdate: () => void;
}

export const Post = ({ post, onUpdate }: PostProps) => {
  const [newComment, setNewComment] = useState<string>("");
  const [newLike, setNewLike] = useState<boolean>(false);

  const handleLike = () => {
    axios
      .post(`/api/posts/${post._id}/like`)
      .then(() => {
        setNewLike(!newLike);
        onUpdate();
      })
      .catch((error) => {
        console.error("Erreur lors du like de la publication :", error);
      });
  };

  const handleComment = () => {
    axios
      .post(`/api/posts/${post._id}/comment`, { comment: newComment })
      .then(() => {
        setNewComment("");
        onUpdate();
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du commentaire :", error);
      });
  };

  return (
    <div className="border p-4 my-4">
      <p className="text-lg font-semibold">{post.author}</p>
      <p className="text-gray-600">{post.content}</p>
      <p className="text-blue-500">{post.likes} Likes</p>
      <button
        className="text-blue-500 hover:underline focus:outline-none"
        onClick={handleLike}
      >
        Like
      </button>
      <div className="mt-2">
        <input
          type="text"
          className="border rounded p-2 w-full"
          placeholder="Ajouter un commentaire"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600 focus:outline-none"
          onClick={handleComment}
        >
          Commenter
        </button>
      </div>
    </div>
  );
};
 */

import { useState } from "react";
import { PostData } from "../data/types";
import { ProfilPicture } from "./ProfilPicture";
import { Typography } from "../common/Typography";
import { IconButton } from "../common/IconButton";

interface PostProps {
  post: PostData;
  onUpdate: (updatedPost: PostData) => void;
}

export const Post = ({ post, onUpdate }: PostProps) => {
  const [newComment, setNewComment] = useState("");
  const [newLike, setNewLike] = useState(false);

  /* CALCUL JOUR POST */
  const calculatePostAge = (createdAt: string) => {
    const postDate = new Date(createdAt);
    const now = new Date();

    const diffInMilliseconds = now.getTime() - postDate.getTime();
    const seconds = Math.floor(diffInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days >= 2) {
      return `${days}j`;
    } else if (days === 1) {
      return "1j";
    } else if (hours >= 1) {
      return `${hours}h`;
    } else if (minutes >= 1) {
      return `${minutes}m`;
    } else {
      return `${seconds}s`;
    }
  };

  const handleLike = () => {
    // Mettez à jour les données fictives pour simuler le "Like"
    const updatedPost = {
      ...post,
      likes: newLike ? post.likes - 1 : post.likes + 1,
    };

    setNewLike(!newLike);
    onUpdate(updatedPost);
  };

  const handleComment = () => {
    // Mettez à jour les données fictives pour simuler l'ajout de commentaire
    const updatedPost = { ...post, comments: [...post.comments, newComment] };

    setNewComment("");
    onUpdate(updatedPost);
  };

  return (
    <section className="flex flex-col gap-15">
      {/* Ligne 1 */}
      <header className="flex items-center">
        <ProfilPicture
          size="32"
          url={post.profilePicture}
          className="mr-2 rounded-full"
        />

        <Typography
          component="h2"
          fontSize="15"
          fontFamily="FKGroteskBold"
          textColor="brown"
        >
          {post.author}
        </Typography>

        <Typography
          component="span"
          fontSize="13"
          fontFamily="FKGroteskBold"
          textColor="beige"
          className="ml-2"
        >
          {calculatePostAge(post.createdAt)}
        </Typography>
      </header>
          <main>
              <img src={post.postPicture} alt="post" className="w-full mask" />
      </main>
      <footer>
        <p className="text-gray-600">{post.content}</p>
        <p className="text-blue-500">{post.likes} Likes</p>
        <button
          className="text-blue-500 hover:underline focus:outline-none"
          onClick={handleLike}
        >
          <IconButton name = "like" size = "small" fill= "brown" />
        </button>
        <div className="mt-2">
          <input
            type="text"
            className="border rounded p-2 w-full"
            placeholder="Ajouter un commentaire"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600 focus:outline-none"
            onClick={handleComment}
          >
            Commenter
          </button>
        </div>
      </footer>
    </section>
  );
};
