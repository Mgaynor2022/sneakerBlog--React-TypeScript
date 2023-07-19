import React, { useContext, useEffect, useState } from "react";
import { CommentsContext } from "../Context/CommentsProvider";
import { UserContext} from "../Context/UserProvider";
import { UserContextType, CommentContextType, Kobe } from "./Types"
import KobeSneakerContent from "./KobeSneakerContent";
import { Comments } from "./Types";
import CommentDisplay from "./CommentDisplay";
import Card from "./Card";
import CommentForm from "./CommentForm";


const SidebarPage = (props:Kobe): any => {

    const {
        kobeSneakers,
        getKobeSneakers,
        // ...comments
    } = useContext<UserContextType>(UserContext)

   
      const {
        comments,
        commentInput,
        handleChange,
        handleTextArea,
        handleSubmit,
        addComment,
        getComments
      } = useContext<CommentContextType>(CommentsContext)

      const [currentKobeId, setCurrentKobeId] = useState<string | null>(null)
      const [showComment, setShowComment] = useState(false)


    useEffect(() => {
        getKobeSneakers()
    
    }, [])

    console.log(currentKobeId)
    // if there is an Id show the comments if not dont show comments 
    useEffect(() => {
        if (currentKobeId) {
          getComments(currentKobeId);
          setShowComment(true);
        } else {
          setShowComment(false);
        }
      }, [currentKobeId]);


    return (
        <div id="KobeItems" className="" >
            {kobeSneakers &&
              kobeSneakers.map((kobeSneaker) => (
              <div  key={kobeSneaker._id}>
                <Card
                 {...kobeSneaker}
                 currentKobeId = {currentKobeId}
                 setCurrentKobeId = {setCurrentKobeId}
                 />

               
                    <button 
                    onClick={() =>
                        setCurrentKobeId(
                        currentKobeId === kobeSneaker._id ? null : kobeSneaker._id
                        )
                    }
                    >
                    {currentKobeId === kobeSneaker._id ? (
                        <span>
                        <i className='fa-regular fa-comment'></i> Comments{' '}
                        {comments.length}
                        </span>
                    ) : (
                        <span>
                        <i className='fa-regular fa-comment'></i> Comment
                        </span>
                    )}
                    </button>
              


            {currentKobeId === kobeSneaker._id && (
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

                    {/* <CommentForm
                        commentInput={commentInput}
                        handleChange={handleChange}
                        handleTextArea={handleTextArea}
                    />

                    <CommentDisplay sneakerId={kobeSneaker._id} /> */}
                </div>

            ))}
            
        </div>
    )

}


export default SidebarPage