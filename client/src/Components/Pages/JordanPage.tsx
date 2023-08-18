import { useContext, useState, useEffect } from "react"
import { CommentContextType, SneakerContextType, UserContextType } from "../../Types/Types"
import { UserContext } from "../../Context/UserProvider"
import { MdOutlineArrowBack } from 'react-icons/md'
import { CommentsContext } from "../../Context/CommentsProvider"
import CommentForm from "../Comments/CommentForm"
import CommentDisplay from "../Comments/CommentDisplay"
import { SneakerContext } from "../../Context/SneakerProvider"
import Card from "../Cards/Card"
import React from "react"


const JordanPage: React.FC = () => {

    const {
        backButton,
        user

    } = useContext<UserContextType>(UserContext)

    const {
         likeJordanSneaker,
         dislikeJordanSneaker,
        getJordanSneakers,
        jordanSneakers
     } = useContext<SneakerContextType>(SneakerContext)

     const {
        commentButton,
        commentsLength,
        currentId, 
        commentInput,
        handleTextArea,
        handleDelete,
        addComment,
        getComments

    } = useContext<CommentContextType>(CommentsContext)

    const [ showComment, setShowComment] = useState<boolean>(false)


    useEffect(() => {
        getJordanSneakers()
        if(currentId){
          getComments(currentId);
          setShowComment(true);
        } else {
          setShowComment(false)
          
        }
    }, [currentId])

    return (
        <div id="jordanPage" className="mb-20">
            <MdOutlineArrowBack id="backArrow"
            className="fixed z-10 left-32 hover:bg-gray-300 rounded-full"
             onClick={backButton} size='3rem' cursor='pointer'/>
            
            { jordanSneakers && jordanSneakers.map((sneaker) => (
                <React.Fragment key={sneaker._id}>
                    < Card
                    {...sneaker}
                    image={sneaker.image}
                    name={sneaker.name}
                    brand={sneaker.brand}
                    releaseDate={sneaker.releaseDate}
                    retailPrice={sneaker.retail}
                    story={sneaker.description}
                    backButton={backButton}
                    upvotes={sneaker.likes}
                    downvotes={sneaker.dislikes}
                    commentButton={commentButton}
                    likeKobeSneaker={likeJordanSneaker}
                    dislikeKobeSneaker={dislikeJordanSneaker}
                    commentsLength={commentsLength}
                     />
                     {currentId === sneaker._id && (
                        <>
                            <CommentForm
                            commentInput={commentInput}
                            handleTextArea={handleTextArea}
                            addComment={addComment}
                            sneakerId={sneaker._id}
                             />
                            {showComment && (
                                <CommentDisplay
                                    user={user}
                                    handleDelete={handleDelete}
                                    sneakerId={sneaker._id} 
                                    comments={[]}
                                />
                            )}
                          
                        </>
                     )}
                </React.Fragment>
            ))}
        </div>
    )


}

export default JordanPage