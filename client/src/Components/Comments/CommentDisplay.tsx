
import {  CommentDisplayProps} from "../../Types/Types";
import Comment from "./Comment";


const CommentDisplay = (props: CommentDisplayProps) => {

    const {sneakerId, handleDelete, user, comments} = props

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
                     userId= {comment.postBy}
                      />
             ))}

        </>

       


    )
}


export default CommentDisplay