// CommentModal.tsx
import { Modal } from "../../common/modal";
import { Typography } from "../../common/Typography";
import { useState } from "react";

interface CommentModalProps {
  className?: string;
  handleCloseModal: () => void;
  comments: string[];
  onAddComment: (comment: string) => void;
}

export const CommentModal = ({
  className,
  handleCloseModal,
  comments,
  onAddComment,
}: CommentModalProps) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      onAddComment(newComment);
      setNewComment("");
    }
  };

  return (
    <Modal
      background="brown"
      className={`${className}`}
      name="Commentaires"
      textColor="white"
      fill="white"
      handleCloseModal={handleCloseModal}
    >
      <div className="comments-container">
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <Typography
              component="p"
              fontSize="15"
              textColor="white"
              fontFamily="FKGrotesk"
            >
              {comment}
            </Typography>
          </div>
        ))}
      </div>
      <div className="add-comment-container">
        <input
          type="text"
          className="border rounded p-2 w-full"
          placeholder="Ajouter un commentaire"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600 focus:outline-none"
          onClick={handleAddComment}
        >
          Ajouter un commentaire
        </button>
      </div>
    </Modal>
  );
};
