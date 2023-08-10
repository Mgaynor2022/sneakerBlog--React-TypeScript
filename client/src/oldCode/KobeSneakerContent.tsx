import { Kobe } from "../Types/Types";
import React, { useContext, useState } from "react";

import Card from "../Components/Cards/Card";
import { CommentsContext } from "../Context/CommentsProvider";
import { CommentContextType } from "../Types/Types";
import CommentForm from "../Components/Comments/CommentForm"
import CommentDisplay from "../Components/Comments/CommentDisplay";


const KobeSneakerContent = (props: Kobe):any => {

    const {
        brand,
        releaseDate,
        name,
        story,
        retailPrice,
        image:{
            thumbnail
        },
        _id
        
    } = props

    const {
        getComments,
        comments
        
      } = useContext<CommentContextType>(CommentsContext)

      const [viewComment, setViewComment] = useState(false)

      const toggleCard = () => {
          setViewComment(prevView => !prevView)
          getComments(_id)
  
      }

    return (
        <>
            <Card
                
                thumbnail={thumbnail}
                brand={brand}
                releaseDate={releaseDate}
                name={name}
                story={story}
                retailPrice={retailPrice}
                {...comments}
                getComments={getComments}
                sneakerId={_id}
            />


       
             
           
        </>
    )

}

export default KobeSneakerContent