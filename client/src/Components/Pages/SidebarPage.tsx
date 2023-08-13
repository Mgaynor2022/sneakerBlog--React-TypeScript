import React, { useContext, useEffect, useState } from "react";
import { CommentsContext } from "../../Context/CommentsProvider";
import { UserContext} from "../../Context/UserProvider";
import { UserContextType, CommentContextType} from "../../Types/Types"
import CommentDisplay from "../Comments/CommentDisplay";
import Card from "../Cards/Card";
import CommentForm from "../Comments/CommentForm";
import { MdOutlineArrowBack } from 'react-icons/md'


const SidebarPage: React.FC = (): any => {

    const {
        kobeSneakers,
        getKobeSneakers,
        likeKobeSneaker,
        dislikeKobeSneaker,
        backButton,
        user

    } = useContext<UserContextType>(UserContext)
   
      const {
        comments,
        commentInput,
        handleTextArea,
        handleDelete,
        addComment,
        getComments,
        currentId,
        commentButton,
        commentsLength
      } = useContext<CommentContextType>(CommentsContext)

      const [showComment, setShowComment] = useState<boolean>(false)

   useEffect(() => {
        getKobeSneakers()
        if(currentId){
          getComments(currentId);
          setShowComment(true);
        } else {
          setShowComment(false)
          
        }
    }, [currentId])


    return (
        <div id="KobeItems" className="mb-20">
            <MdOutlineArrowBack className="fixed z-10 left-32 hover:bg-gray-300 rounded-full" onClick={backButton} size='3rem' cursor='pointer' />

            {kobeSneakers &&
              kobeSneakers.map((kobeSneaker) => (
              <React.Fragment key={kobeSneaker._id}>
                <Card
                 {...kobeSneaker}
                 image={kobeSneaker?.image.thumbnail}
                 likeKobeSneaker = {likeKobeSneaker}
                 dislikeKobeSneaker = {dislikeKobeSneaker}
                 backButton = {backButton}
                 commentButton= {commentButton}
                 comments = {comments}
                 commentsLength={commentsLength}
                 {...commentInput}
                 />

            {currentId === kobeSneaker._id && (
            <>
              <CommentForm
                commentInput={commentInput}
                handleTextArea={handleTextArea}
                addComment= {addComment}
                sneakerId= {kobeSneaker._id}
                />
              {showComment && (
                <CommentDisplay
                 sneakerId={kobeSneaker._id}
                 handleDelete={handleDelete}
                 user = {user}
                  />
              )}
            </>
          )}

    
                </React.Fragment>

            ))}
            
        </div>
    )

}


export default SidebarPage