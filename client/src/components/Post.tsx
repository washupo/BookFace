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
// Post.tsx
// Post.tsx
import { useState } from "react";
import { PostData } from "../data/types";
import { ProfilPicture } from "./ProfilPicture";
import { Typography } from "../common/Typography";
import { IconButton } from "../common/IconButton";
import { CommentModal } from "../pages/PopUps/CommentModal";

interface PostProps {
  post: PostData;
  onUpdate: (updatedPost: PostData) => void;
  className?: string;
}

export const Post = ({ post, onUpdate, className }: PostProps) => {
  const [popUpComment, setPopUpComment] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  /* Modal Comment */
  const openCommentPopUp = () => {
    setPopUpComment(true);
  };
  const closeCommentPopUp = () => {
    setPopUpComment(false);
  };

  /* Calculate date post */
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

  /* Likes */
  const handleLike = () => {
    // Met à jour les données fictives pour simuler le "Like"
    const updatedPost = {
      ...post,
      likes: isLiked ? post.likes - 1 : post.likes + 1,
    };

    setIsLiked(!isLiked); // Basculer entre "like" et "liked"
    onUpdate(updatedPost);
  };

  return (
    <article
      className={`flex flex-col gap-15 border-b-1 pb-30 border-beigePrimary${className}`}
    >
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
            name={isLiked ? "liked" : "like"} // Change le nom en fonction de l'état "like" ou "liked"
            size="small"
            fill="brown"
            onClick={handleLike}
          />
          <IconButton
            name="comment"
            size="small"
            fill="brown"
            onClick={openCommentPopUp}
          />
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
          component="button"
          fontSize="13"
          fontFamily="FKGrotesk"
          textColor="beige"
          onClick={openCommentPopUp}
        >
          Voir {post.comments.length} commentaires
        </Typography>
      </footer>

      {popUpComment && (
        <CommentModal
          className="comment-modal"
          handleCloseModal={closeCommentPopUp}
          comments={post.comments}
          onAddComment={(newCommentText) => {
            // Cette fonction sera appelée depuis le modal pour ajouter un commentaire.
            const newComment = {
              text: newCommentText,
              username: "leNomUtilisateur",  // Remplacez par le nom d'utilisateur approprié
            };

            const updatedPost = {
              ...post,
              comments: [...post.comments, newComment],
            };
            onUpdate(updatedPost);
          }}
        />
      )}
      {/* Afficher le premier commentaire s'il existe */}
      {/* {post.comments.length > 0 && (
        <div className="border p-4 my-4">
          <p className="text-lg font-semibold">{post.comments[0].username}</p>
          <p className="text-gray-600">{post.comments[0].text}</p>
        </div>
      )} */}
    </article>
  );
};
