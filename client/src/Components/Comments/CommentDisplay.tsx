import React, { useContext, useEffect } from "react";
import { CommentsContext } from "../../Context/CommentsProvider";
import { Comments } from "../../Types/Types";
import { CommentContextType } from "../../Types/Types";
import Comment from "./Comment";


const CommentDisplay = (props:Comments) => {

    const {sneakerId, handleDelete, user} = props

    const {

        comments
        
      } = useContext<CommentContextType>(CommentsContext)
      console.log(comments)

    return (
        <div>
            {comments &&
             comments.map((comment) => (
                <Comment
                 {...comment}
                  key={comment._id}
                   commentId={comment._id}
                     sneakerId={sneakerId}
                     handleDelete={handleDelete}
                     user={user}
                     userId= {comment.user}
                      />
             ))}

        </div>

       


    )
}


export default CommentDisplay