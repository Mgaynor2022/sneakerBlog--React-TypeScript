import  { useContext, useEffect, useState} from "react";
import { UserContext} from "../../Context/UserProvider";
import { CommentContextType, SneakerContextType, UserContextType } from "../../Types/Types"
import { useParams } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md'
import Card from "../Cards/Card";
import { CommentsContext } from "../../Context/CommentsProvider";
import { SneakerContext } from "../../Context/SneakerProvider";
import CommentForm from "../Comments/CommentForm";
import CommentDisplay from "../Comments/CommentDisplay";



const PopularSneakersPage = () => {

    const { id } = useParams<{ id: string }>();

    const {
        popularSneakers,
        backButton,
        getPopularSneakers,
        user
        
    } = useContext<UserContextType>(UserContext)

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

    const {
        likePopularSneakers,
        dislikePopularSneakers

    } = useContext<SneakerContextType>(SneakerContext)

    const [ showComment, setShowComment] = useState<boolean>(false)

    useEffect(() => {
        getPopularSneakers()
        if(currentId){
          getComments(currentId);
          setShowComment(true);
        } else {
          setShowComment(false)
          
        }
    }, [currentId])

    const filteredSneaker = popularSneakers.filter((sneaker) => id === sneaker.id)

    return (
        <div id="sneakersPage">
            <MdOutlineArrowBack className="fixed z-10 left-32 hover:bg-gray-300 rounded-full" onClick= {backButton} size='3rem' cursor="pointer" />
            {filteredSneaker && filteredSneaker.map((trend) => (
                <div key={trend.id}>
                    <Card
                    {...trend}
                    _id= {trend._id}
                    backButton={backButton}
                    releaseDate={trend.release_date}
                    thumbnail={trend.image}
                    comments={comments}
                    story = {trend.description}
                    retailPrice={trend.price}
                    upvotes={trend.likes}
                    downvotes={trend.dislikes}
                    commentButton={commentButton}
                    likeKobeSneaker={likePopularSneakers}
                    dislikeKobeSneaker={dislikePopularSneakers}
                    commentsLength={commentsLength}
                    
                     />

                     {currentId === trend._id && (
                        <>
                            <CommentForm
                            commentInput={commentInput}
                            handleChange={handleChange}
                            handleTextArea={handleTextArea}
                            addComment={addComment}
                            sneakerId={trend._id}
                             />
                            {showComment && (
                                <CommentDisplay
                                user={user}
                                handleDelete={handleDelete}
                                sneakerId={trend._id}
                                 />
                            )}
                          
                        </>
                     )}
                </div>
             ))}  
        </div>
    )


}

export default PopularSneakersPage