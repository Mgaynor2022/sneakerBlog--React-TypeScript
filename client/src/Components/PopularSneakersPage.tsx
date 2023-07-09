import React, { useContext, useEffect } from "react";
import { UserContext} from "../Context/UserProvider";
import { UserContextType, CommentContextType, Sneakers } from "./Types"
import { CommentsContext } from "../Context/CommentsProvider";
import PopularSneakersCard from "./PopularSneakersCard";


const PopularSneakersPage = (props: Sneakers) => {

    const {
        addComment,
        image,
        name,
        release_date,
        brand,
        category,
        handleChange,
        commentInput,
        description,
        price,
        ...popularSneakers
    } = props

    // useEffect(() => {
    //     getPopularSneakers()
    // },[])

    // const {
    //     popularSneakers,
    //     getPopularSneakers
    // } = useContext<UserContextType>(UserContext)


    return (
        <div>
            {popularSneakers && popularSneakers.map((trend) => (
                <div>
                    <PopularSneakersCard
                    {...trend}
                    addComment = {addComment}
                    getComments = {getComments}
                    deleteComment = {deleteComment}
                    commentInput = {commentInput}
                    handleChange = {handleChange}
                    
                     />
                </div>
            ))}
        </div>
    )



  


}

export default PopularSneakersPage