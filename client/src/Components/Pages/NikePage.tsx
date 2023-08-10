import { useContext, useState, useEffect } from "react"
import { CommentContextType, SneakerContextType, UserContextType } from "../../Types/Types"
import { UserContext } from "../../Context/UserProvider"
import { useParams } from "react-router-dom"
import { MdOutlineArrowBack } from 'react-icons/md'
import Card from "../Cards/Card"
import { SneakerContext } from "../../Context/SneakerProvider"
import { CommentsContext } from "../../Context/CommentsProvider"
import CommentForm from "../Comments/CommentForm"
import CommentDisplay from "../Comments/CommentDisplay"


const NikePage: React.FC = () => {
    
    const { click } = useParams<{click: string,}>()

    const {
        allSneakers,
        backButton,
        user

    } = useContext<UserContextType>(UserContext)

    const {
         likePublicSneakers,
        dislikePublicSneakers,
        getPublicSneakers

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

    const [ showComment, setShowComment] = useState(false)

    const filteredNike = allSneakers.filter((sneaker) => sneaker.details.brand === click)

    useEffect(() => {
        getPublicSneakers()
        if(currentId){
          getComments(currentId);
          setShowComment(true);
        } else {
          setShowComment(false)
          
        }
    }, [currentId])

    return (
        <div id="nikePage">
            <MdOutlineArrowBack onClick={backButton} size='1.5rem' cursor='pointer'/>
            
            {filteredNike && filteredNike.map((sneaker) => (
                <div key={sneaker.brand}>
                    <Card 
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
                    likeKobeSneaker={likePublicSneakers}
                    dislikeKobeSneaker={dislikePublicSneakers}
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

export default NikePage