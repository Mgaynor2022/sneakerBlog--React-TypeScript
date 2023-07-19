import React, { useContext, useEffect } from "react";
import { UserContext} from "../Context/UserProvider";
import { UserContextType, CommentContextType } from "./Types"
import PopularSneakersCard from "../oldCode/PopularSneakersCard";
import { CommentsContext } from "../Context/CommentsProvider";

const PublicPage: React.FC = () => {

    useEffect(() => {
        // getComments(),
        getPublicSneakers()
        getPopularSneakers()
        // getKobeSneakers()
        
    }, [])

    const { allSneakers,
            addComment,
            getComments,
            deleteComment,
            getPublicSneakers,
            popularSneakers,
            getPopularSneakers,
            getKobeSneakers
         } = useContext<UserContextType>(UserContext);

    const { commentInput,
            handleChange
          } = useContext<CommentContextType>(CommentsContext)
  
    return (
      <>
      <div id='trend' className='flex items-center'>
          <h1 className="text-2xl pl-10">Trending Sneakers</h1><hr className="w-8/12 text-center h-px mx-5 bg-gray-200 border-0"/>
        </div>
      <div id='trendItems'>
          <div id='slider' className=" " >
            {popularSneakers &&
              popularSneakers.map((trend) => (
                <div id="slide-tracker" className="cursor-pointer flex justify-between animate-marquee-infinite ">
                  <PopularSneakersCard
                    {...trend}
                    // addComment = {addComment}
                    // getComments = {getComments}
                    deleteComment = {deleteComment}
                    handleChange = {handleChange}
                  />
                </div>
              ))}

          </div>
          
      </div>
      </>
    );
  };

export default PublicPage