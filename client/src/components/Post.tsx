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
    // Met à jour les données fictives pour simuler le "Like"
    const updatedPost = {
      ...post,
      likes: newLike ? post.likes - 1 : post.likes + 1,
    };

    setNewLike(!newLike);
    onUpdate(updatedPost);
  };

  const handleComment = () => {
    // Met à jour les données fictives pour simuler l'ajout de commentaire
    const updatedPost = { ...post, comments: [...post.comments, newComment] };

    setNewComment("");
    onUpdate(updatedPost);
  };

  return (
    <article className="flex flex-col gap-15 border-b-1 pb-30 border-beigePrimary">
      <header className="flex items-center gap-8">
        <ProfilPicture
          size="32"
          url={post.profilePicture}
          className="rounded-full"
        />
        <Typography
          component="h2"
          fontSize="15"
          fontFamily="FKGroteskBold"
          textColor="brown"
        >
          {post.username}
        </Typography>
        <Typography
          component="p"
          fontSize="13"
          fontFamily="FKGrotesk"
          textColor="beige"
        >
          {calculatePostAge(post.createdAt)}
        </Typography>
      </header>
      <main className="flex flex-col gap-15">
        <img src={post.postPicture} alt="post" className="w-full" />
        <section className="flex gap-8">
          <Typography
            component="p"
            fontSize="15"
            fontFamily="FKGroteskBold"
            textColor="brown"
          >
            {post.username}
          </Typography>
          <Typography
            component="p"
            fontSize="15"
            fontFamily="FKGrotesk"
            textColor="brown"
            className=""
          >
            {post.captionPicture}
          </Typography>
        </section>
      </main>
      <footer className="">
        <div className="flex gap-10 pb-15">
          <IconButton
            name="like"
            size="small"
            fill="brown"
            onClick={handleLike}
          />
          <IconButton name="comment" size="small" fill="brown" />
        </div>

        <Typography
          component="p"
          fontSize="13"
          fontFamily="FKGroteskBold"
          textColor="brown"
        >
          {post.likes} Likes
        </Typography>
        <Typography
          component="span"
          fontSize="13"
          fontFamily="FKGrotesk"
          textColor="beige"
        >
          Voir {post.comments.length} commentaires
        </Typography>

        {/*         <div className="mt-2">
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
        </div> */}
      </footer>
    </article>
  );
};