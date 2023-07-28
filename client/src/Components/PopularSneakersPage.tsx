import  { useContext} from "react";
import { UserContext} from "../Context/UserProvider";
import { CommentContextType, SneakerContextType, UserContextType } from "../Types/Types"
import { useParams } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md'
import Card from "./Card";
import { CommentsContext } from "../Context/CommentsProvider";
import { SneakerContext } from "../Context/SneakerProvider";



const PopularSneakersPage = () => {

    const { id } = useParams<{ id: string }>();

    const {
        // allSneakers,
        popularSneakers,
        backButton,
        
        
    } = useContext<UserContextType>(UserContext)

    const {
        comments,
        commentButton
    } = useContext<CommentContextType>(CommentsContext)

    const {
        likePopularSneakers,
        dislikePopularSneakers

    } = useContext<SneakerContextType>(SneakerContext)

    const filteredSneaker = popularSneakers.filter((sneaker) => id === sneaker.id)
    console.log(id)

    return (
        <div id="sneakersPage">
            <MdOutlineArrowBack className="" onClick= {backButton} size='1.5rem' />
            {filteredSneaker && filteredSneaker.map((trend) => (
                <div key={trend.id}>
                    <Card
                    {...trend}
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
                    
                     />
                </div>
             ))}  
        </div>
    )


}

export default PopularSneakersPage