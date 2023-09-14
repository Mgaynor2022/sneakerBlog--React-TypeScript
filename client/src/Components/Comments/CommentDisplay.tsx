import { useContext } from "react";
import { CommentContextType, CommentDisplayProps } from "../../Types/Types";
import Comment from "./Comment";
import { CommentsContext } from "../../Context/CommentsProvider";

const CommentDisplay = (props: CommentDisplayProps) => {
  const { sneakerId, handleDelete, user } = props;

  const { comments } = useContext<CommentContextType>(CommentsContext);

  return (
    <>
      {comments &&
        comments.map((comment) => (
          <Comment
            {...comment}
            key={comment._id}
            commentId={comment._id}
            sneakerId={sneakerId}
            handleDelete={handleDelete}
            user={user}
            userId={comment.postBy}
            username={comment.user.username}
          />
        ))}
    </>
  );
};

export default CommentDisplay;
