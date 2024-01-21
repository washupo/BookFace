// CommentModal.tsx
import { IconButton } from "../../common/IconButton";
import { Modal } from "../../common/modal";
import { Typography } from "../../common/Typography";
import { Form } from "../../components/form/Form";
import { useState } from "react";
import { InputRounded } from "../../components/form/InputRounded";

interface CommentModalProps {
  className?: string;
  handleCloseModal: () => void;
  comments: { text: string; username: string }[]; // Mettez à jour le type des commentaires
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
      className={`${className}h-screen`}
      name="Commentaires"
      textColor="white"
      fill="white"
      handleCloseModal={handleCloseModal}
    >
      <div className="flex flex-col gap-15">
        {comments.map((comment, index) => (
          <div key={index} className="">
            <Typography
              component="p"
              fontSize="15"
              textColor="white"
              fontFamily="FKGrotesk"
            >
              <span className="FKGroteskBold pr-[10px]">
                {comment.username}
              </span>
              {comment.text}
            </Typography>
          </div>
        ))}
      </div>
      <Form onSubmit={handleAddComment} className="relative">
        <InputRounded
          as="input"
          label="Mon Textarea"
          value={newComment}
          name="monTextarea"
          placeholder="Ajouter un commentaire…"
          onChange={(e) => setNewComment(e.target.value)}
          required={true}
          className="w-full"
          error={null}
          color="brown"
        ></InputRounded>
        <IconButton
          name="send"
          size="small"
          fill="brown"
          onClick={handleAddComment}
          className="absolute right-[20px] top-[13px]"
        />
      </Form>
    </Modal>
  );
};
