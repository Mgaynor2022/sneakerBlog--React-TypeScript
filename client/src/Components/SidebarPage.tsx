import React, { useContext, useEffect, useState } from "react";
import { CommentsContext } from "../Context/CommentsProvider";
import { UserContext} from "../Context/UserProvider";
import { UserContextType, CommentContextType} from "../Types/Types"
import CommentDisplay from "./Comments/CommentDisplay";
import Card from "./Card";
import CommentForm from "./Comments/CommentForm";
import { MdOutlineArrowBack } from 'react-icons/md'


const SidebarPage: React.FC = (): any => {

    const {
        kobeSneakers,
        getKobeSneakers,
        likeKobeSneaker,
        dislikeKobeSneaker,
        backButton

    } = useContext<UserContextType>(UserContext)
   
      const {
        comments,
        commentInput,
        handleChange,
        handleTextArea,
        handleSubmit,
        addComment,
        getComments,
        currentId,
        commentButton
      } = useContext<CommentContextType>(CommentsContext)

      const [showComment, setShowComment] = useState(false)


    useEffect(() => {
        getKobeSneakers()
        if(currentId){
          getComments(currentId);
          setShowComment(true);
        } else {
          setShowComment(false);

        }
    }, [currentId])

    return (
        <div id="KobeItems" className="" >
            <MdOutlineArrowBack className="" onClick= {backButton} size='1.5rem' />

            {kobeSneakers &&
              kobeSneakers.map((kobeSneaker) => (
              <div  key={kobeSneaker._id}>
                <Card
                 {...kobeSneaker}
                 image={kobeSneaker.image.thumbnail}
                 likeKobeSneaker = {likeKobeSneaker}
                 dislikeKobeSneaker = {dislikeKobeSneaker}
                 backButton = {backButton}
                 commentButton= {commentButton}
                 comments = {comments}
                 />

            {currentId === kobeSneaker._id && (
            <>
              <CommentForm
                commentInput={commentInput}
                handleChange={handleChange}
                handleTextArea={handleTextArea}
                />
              {showComment && (
                <CommentDisplay sneakerId={kobeSneaker._id} />
              )}
            </>
          )}

    
                </div>

            ))}
            
        </div>
    )

}


export default SidebarPage