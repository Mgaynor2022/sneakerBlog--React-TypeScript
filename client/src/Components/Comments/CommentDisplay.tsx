import React, { useContext, useEffect } from "react";
import { CommentsContext } from "../../Context/CommentsProvider";
import { Comments } from "../../Types/Types";
import { CommentContextType } from "../../Types/Types";
import Comment from "./Comment";


const CommentDisplay = (props:Comments) => {

    const {sneakerId} = props

    const {

        comments
        
      } = useContext<CommentContextType>(CommentsContext)

console.log(comments)

    return (
        <div>
            {comments &&
             comments.map((comment) => (
                <Comment {...comment} key={comment._id}  sneakerId={sneakerId} />
             ))}

        </div>


    )
}


export default CommentDisplay