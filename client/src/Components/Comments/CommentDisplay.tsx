import { useContext } from "react";
import { CommentsContext } from "../../Context/CommentsProvider";
import {  CommentDisplayProps} from "../../Types/Types";
import { CommentContextType } from "../../Types/Types";
import Comment from "./Comment";


const CommentDisplay = (props: CommentDisplayProps) => {

    const {sneakerId, handleDelete, user} = props

    const {

        comments
        
      } = useContext<CommentContextType>(CommentsContext)
      console.log(comments)

    return (
        <>
            {comments &&
             comments.map((comment) => (
                <Comment
                 {...comment}
                  key={comment._id}
                  username={comment.user.username}
                   commentId={comment._id}
                     sneakerId={sneakerId}
                     handleDelete={handleDelete}
                     user={user}
                     userId= {comment.postBy}
                      />
             ))}

        </>

       


    )
}


export default CommentDisplay