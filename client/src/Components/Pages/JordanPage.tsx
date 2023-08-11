import { useContext, useState, useEffect } from "react"
import { CommentContextType, SneakerContextType, UserContextType } from "../../Types/Types"
import { UserContext } from "../../Context/UserProvider"
import { MdOutlineArrowBack } from 'react-icons/md'
import { CommentsContext } from "../../Context/CommentsProvider"
import CommentForm from "../Comments/CommentForm"
import CommentDisplay from "../Comments/CommentDisplay"
import { SneakerContext } from "../../Context/SneakerProvider"
import Card from "../Cards/Card"


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
        comments,
        commentButton,
        commentsLength,
        currentId, 
        commentInput,
        handleChange,
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
        <div id="jordanPage">
            <MdOutlineArrowBack className="fixed z-10 left-32 hover:bg-gray-300 rounded-full" onClick={backButton} size='3rem' cursor='pointer'/>
            
            { jordanSneakers && jordanSneakers.map((sneaker) => (
                <div key={sneaker._id}>
                    < Card
                    {...sneaker}
                    image={sneaker.image}
                    name={sneaker.name}
                    brand={sneaker.details.brand}
                    releaseDate={sneaker.details.releaseDate}
                    retailPrice={sneaker.details.retail}
                    story={sneaker.details.description}
                    comments={comments}
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
                            handleChange={handleChange}
                            handleTextArea={handleTextArea}
                            addComment={addComment}
                            sneakerId={sneaker._id}
                             />
                            {showComment && (
                                <CommentDisplay
                                user={user}
                                handleDelete={handleDelete}
                                sneakerId={sneaker._id}
                                 />
                            )}
                          
                        </>
                     )}
                </div>
            ))}
        </div>
    )


}

export default JordanPage